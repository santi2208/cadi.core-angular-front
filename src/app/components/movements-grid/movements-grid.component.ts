import { Component, OnInit } from "@angular/core";
import { MovementsService } from "../../services/movements/movements.service";
import {MovementDto } from "../../dtos/movements.interfaces";


@Component({
  selector: "movement-grid",
  templateUrl: "./movements-grid.component.html",
  styleUrls: ["./movements-grid.component.css"],
})
export class MovementsGridComponent implements OnInit {
  movements: MovementDto[] = [];
  filteredMovements: MovementDto[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchTerm = "";
  sortColumn: keyof MovementDto | "createdByUser" | "sourceAccount" | "sourceAccountNumber" | "targetAccount" | "targetAccountNumber"| "period" = "id";
  sortDirection: "asc" | "desc" = "asc";
  public Math = Math;
  
  constructor(private movementsService: MovementsService) {}

  ngOnInit(): void {
    this.movementsService.getAll().subscribe((data) => {
      this.movements = data;
      this.applyFilterAndSort();
    });
  }

  applyFilterAndSort(): void {
    const searchTermLower = this.searchTerm.toLowerCase();

    // Filtrar
    this.filteredMovements = this.movements.filter((movement) =>
      [
        movement.id.toString(),
        movement.amount.toString(),
        movement.createdByUser.description,
        movement.sourceAccount.name,
        movement.sourceAccount.number,
        movement.targetAccount.name,
        movement.targetAccount.number,
        `${movement.period.startDate} - ${movement.period.endDate}`,
      ]
        .map((value) => value.toLowerCase())
        .some((value) => value.includes(searchTermLower))
    );

    // Ordenar
    this.filteredMovements.sort((a, b) => {
      const getColumnValue = (movement: MovementDto): string => {
        if (this.sortColumn === "amount") {
          return movement.amount.toString().toLowerCase();
        }
        if (this.sortColumn === "createdDate") {
          return movement.createdDate.toString().toLowerCase();
        }
        if (this.sortColumn === "createdByUser") {
          return movement.createdByUser.description.toLowerCase();
        }
        if (this.sortColumn === "sourceAccount") {
          return movement.sourceAccount.name.toLowerCase();
        }
        if (this.sortColumn === "sourceAccountNumber") {
          return movement.sourceAccount.number.toLowerCase();
        }
        if (this.sortColumn === "targetAccount") {
          return movement.targetAccount.name.toLowerCase();
        }
        if (this.sortColumn === "targetAccountNumber") {
          return movement.targetAccount.number.toLowerCase();
        }
        if (this.sortColumn === "period") {
          return movement.period.startDate.toString().toLowerCase();
        }
        return movement[this.sortColumn]?.toString().toLowerCase() || "";
      };

      const valueA = getColumnValue(a);
      const valueB = getColumnValue(b);

      if (valueA < valueB) return this.sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    // Paginar
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.filteredMovements = this.filteredMovements.slice(start, end);
  }

  onSearchTermChange(): void {
    this.currentPage = 1;
    this.applyFilterAndSort();
  }

  onSort(column: keyof MovementDto | "createdByUser" | "sourceAccount" | "sourceAccountNumber" | "targetAccount" | "targetAccountNumber" | "period"): void {
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
