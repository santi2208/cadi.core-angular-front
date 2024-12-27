import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AccountService, AccountDto } from '../../services/accounts/account.service';

@Component({
  selector: 'account-grid',
  templateUrl: './account-grid.component.html',
  styleUrls: ['./account-grid.component.css'],
})
export class AccountGridComponent implements OnInit {
  displayedColumns: string[] = ['id', 'number', 'name', 'parentAccountId', 'currencyTypeId'];
  dataSource: MatTableDataSource<AccountDto> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.fetchAccounts();
  }

  fetchAccounts(): void {
    this.accountService.getAllAccounts().subscribe({
      next: (accounts) => {
        this.dataSource = new MatTableDataSource(accounts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error('Error al cargar las cuentas:', err);
      },
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
