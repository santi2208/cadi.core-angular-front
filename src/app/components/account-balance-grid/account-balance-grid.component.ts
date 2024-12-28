import { Component, OnInit } from "@angular/core";
import { AccountBalanceDto } from "app/dtos/accounts.interfaces";
import { AccountBalanceService } from "app/services/account-balance/account-balance.service";

@Component({
  selector: "account-balance-grid",
  templateUrl: "./account-balance-grid.component.html",
  styleUrls: ["./account-balance-grid.component.css"],
})
export class AccountBalanceGridComponent implements OnInit {
  accountBalances: AccountBalanceDto[] = [];
  filteredAccounts: AccountBalanceDto[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchTerm = "";
  sortColumn: keyof AccountBalanceDto = "id";
  sortDirection: "asc" | "desc" = "asc";
  public Math = Math;
  constructor(private accountBalanceService: AccountBalanceService) {}

  ngOnInit(): void {
    this.accountBalanceService.getAll().subscribe((data) => {
      this.accountBalances = data;
      this.applyFilterAndSort();
    });
  }

  applyFilterAndSort(): void {
    try {
      // Filtrar
      const searchTermLower = this.searchTerm.toLowerCase();
      this.filteredAccounts = this.accountBalances.filter(
        (accountBalance) =>
          accountBalance.account.name.toLowerCase().includes(searchTermLower) ||
          accountBalance.account.number.toLowerCase().includes(searchTermLower) ||
          accountBalance.account.currencyType.description.toLowerCase().includes(searchTermLower) ||
          accountBalance.updatedByUser.description.toLowerCase().includes(searchTermLower) ||
          accountBalance.balance.toString().toLowerCase().includes(searchTermLower)
      );

      // Ordenar
      this.filteredAccounts.sort((a, b) => {
        const valueA =
          this.sortColumn === "currencyType" || 
          this.sortColumn === "updatedByUser" 
            ? (a[this.sortColumn]?.description || "").toLowerCase()
            : (a[this.sortColumn] || "").toString().toLowerCase();

        const valueB =
          this.sortColumn === "updatedByUser" ||
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
  
    onSort(column: keyof AccountBalanceDto): void {
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
