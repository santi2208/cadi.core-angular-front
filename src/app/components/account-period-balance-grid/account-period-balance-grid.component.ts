import { Component, OnInit } from "@angular/core";
import { AccountPeriodBalanceService } from "app/services/account-period-balance/account-period-balance.service";
import { AccountPeriodBalanceDto } from "app/dtos/accounts.interfaces";

@Component({
  selector: "account-period-balance-grid",
  templateUrl: "./account-period-balance-grid.component.html",
  styleUrls: ["./account-period-balance-grid.component.css"],
})
export class AccountPeriodBalanceGridComponent implements OnInit {
  accountBalances: AccountPeriodBalanceDto[] = [];
  filteredAccounts: AccountPeriodBalanceDto[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchTerm = "";
  sortColumn: keyof AccountPeriodBalanceDto = "id";
  sortDirection: "asc" | "desc" = "asc";
  public Math = Math;
  constructor(
    private accountPeriodBalanceService: AccountPeriodBalanceService
  ) {}

  ngOnInit(): void {
    this.accountPeriodBalanceService.getAll().subscribe((data) => {
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
          accountBalance.account.number
            .toLowerCase()
            .includes(searchTermLower) ||
          accountBalance.account.currencyType.description
            .toLowerCase()
            .includes(searchTermLower) ||
          accountBalance.totalDebits
            .toString()
            .toLowerCase()
            .includes(searchTermLower) ||
          accountBalance.totalCredits
            .toString()
            .toLowerCase()
            .includes(searchTermLower) ||
          accountBalance.period.startDate
            .toString()
            .toLowerCase()
            .includes(searchTermLower)
      );

      // Ordenar
      this.filteredAccounts.sort((a, b) => {
        let valueA: string | number | Date | undefined;
        let valueB: string | number | Date | undefined;

        switch (this.sortColumn) {
          case "account":
            valueA = a.account.name.toLowerCase();
            valueB = b.account.name.toLowerCase();
            break;
          case "initialBalance":
            valueA = a.initialBalance;
            valueB = b.initialBalance;
            break;
          case "finalBalance":
            valueA = a.finalBalance;
            valueB = b.finalBalance;
            break;
          case "period":
            valueA = a.period.startDate.toString().toLowerCase();
            valueB = b.period.startDate.toString().toLowerCase();
            break;
          case "currencyType":
            valueA = a.currencyType.description.toLowerCase();
            valueB = b.currencyType.description.toLowerCase();
            break;
          case "closedDate":
            valueA = a.closedDate;
            valueB = b.closedDate;
            break;
          case "closedBy":
            valueA = a.closedBy.description.toLowerCase();
            valueB = b.closedBy.description.toLowerCase();
            break;
          default:
            return 0;
        }

        if (valueA! < valueB!) return this.sortDirection === "asc" ? -1 : 1;
        if (valueA! > valueB!) return this.sortDirection === "asc" ? 1 : -1;
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

  onSort(column: keyof AccountPeriodBalanceDto): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column;
      this.sortDirection = "asc";
    }
    this.applyFilterAndSort();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.applyFilterAndSort();
  }
}
