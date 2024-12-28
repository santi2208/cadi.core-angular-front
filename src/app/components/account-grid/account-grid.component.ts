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
      console.log("---------------getAllAccounts----------------");
      this.accounts = data;
      console.log(data);
      this.applyFilterAndSort();
    });
  }

  applyFilterAndSort(): void {
    try {
      // Filtrar
      const searchTermLower = this.searchTerm.toLowerCase();
      this.filteredAccounts = this.accounts.filter(
        (account) =>
          account.number.toLowerCase().includes(searchTermLower) ||
          account.name.toLowerCase().includes(searchTermLower) ||
          account.parentAccount?.description
            ?.toLowerCase()
            .includes(searchTermLower) ||
          account.currencyType?.description
            ?.toLowerCase()
            .includes(searchTermLower)
      );

      // Ordenar
      this.filteredAccounts.sort((a, b) => {
        const valueA =
          this.sortColumn === "parentAccount" ||
          this.sortColumn === "currencyType"
            ? (a[this.sortColumn]?.description || "").toLowerCase()
            : (a[this.sortColumn] || "").toString().toLowerCase();

        const valueB =
          this.sortColumn === "parentAccount" ||
          this.sortColumn === "currencyType"
            ? (b[this.sortColumn]?.description || "").toLowerCase()
            : (b[this.sortColumn] || "").toString().toLowerCase();

        if (valueA < valueB) return this.sortDirection === "asc" ? -1 : 1;
        if (valueA > valueB) return this.sortDirection === "asc" ? 1 : -1;
        return 0;
      });

      // Paginar
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      this.filteredAccounts = this.filteredAccounts.slice(start, end);
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
