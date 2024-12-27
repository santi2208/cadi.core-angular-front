// account-grid.component.ts
import { Component, OnInit } from "@angular/core";
import {
  AccountService,
  AccountDto,
} from "../../services/accounts/account.service";

@Component({
  selector: "app-account-grid",
  templateUrl: "./account-grid.component.html",
  styleUrls: ["./account-grid.component.css"],
})
export class AccountGridComponent implements OnInit {
  accounts: AccountDto[] = [];
  filteredAccounts: AccountDto[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchTerm = "";
  sortColumn: keyof AccountDto = "id";
  sortDirection: "asc" | "desc" = "asc";
  public Math = Math;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe((data) => {
      this.accounts = data;
      this.applyFilterAndSort();
    });
  }

  applyFilterAndSort(): void {
    try {
      // Filtrar
      this.filteredAccounts = this.accounts.filter((account) =>
        Object.values(account).some((value) =>
          value
            ?.toString()
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        )
      );

      // Ordenar
      this.filteredAccounts.sort((a, b) => {
        const valueA = a[this.sortColumn];
        const valueB = b[this.sortColumn];
        if (valueA < valueB) return this.sortDirection === "asc" ? -1 : 1;
        if (valueA > valueB) return this.sortDirection === "asc" ? 1 : -1;
        return 0;
      });

      // Paginar
      this.filteredAccounts = this.filteredAccounts.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
    } catch (error) {
      console.log("----------applyFilterAndSort-------------");
      console.log(error);
      console.log("-----------------------------------------");
    }
  }

  onSearchTermChange(): void {
    this.currentPage = 1;
    this.applyFilterAndSort();
  }

  onSort(column: keyof AccountDto): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column;
      this.sortDirection = "asc";
    }
    this.applyFilterAndSort();
  }

  onPageChange(page: number): void {
    console.log("-----Page-----");
    console.log(page);
    console.log("----------");
    this.currentPage = page;
    this.applyFilterAndSort();
  }
}
