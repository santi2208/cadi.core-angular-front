import { Component, OnInit } from "@angular/core";
import { Period } from "app/dtos/common.interfaces";
import { PeriodsService } from "app/services/periods/periods.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "periods-grid",
  templateUrl: "./periods-grid.component.html",
  styleUrls: ["./periods-grid.component.css"],
})
export class PeriodsGridComponent implements OnInit {
  periods: Period[] = [];
  filteredPeriods: Period[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchTerm = "";
  sortColumn: keyof Period | "id" | "startDate" | "endDate" | "isClosed";
  sortDirection: "asc" | "desc" = "asc";
  newPeriod: Date | null = null;

  public Math = Math;

  constructor(
    private periodsService: PeriodsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  onSubmit(): void {
    if (this.newPeriod) {
      const formattedPeriod = this.newPeriod.toString();
      this.periodsService.createPeriod(formattedPeriod).subscribe({
        next: (response) => {
          this.snackBar.open(response.message, "Cerrar", { duration: 3000 });
          this.refreshData();
        },
        error: (response) => {
          this.snackBar.open(
            `Error al crear periodo: ${response.error.message}`,
            "Cerrar",
            { duration: 3000 }
          );
        },
      });
    }
  }

  private loadData(): void {
    this.periodsService.getAll().subscribe((data) => {
      this.periods = data;
      this.applyFilterAndSort();
    });
  }

  applyFilterAndSort(): void {
    try {
      // Filtrar
      const searchTermLower = this.searchTerm.toLowerCase();
      this.filteredPeriods = this.periods.filter(
        (period) =>
          period.endDate?.toString().toLowerCase().includes(searchTermLower) ||
          period.isClosed?.toString().toLowerCase().includes(searchTermLower) ||
          period.startDate?.toString().toLowerCase().includes(searchTermLower)
      );

      // Ordenar
      this.filteredPeriods.sort((a, b) => {
        let valueA: string | number | Date | undefined;
        let valueB: string | number | Date | undefined;

        switch (this.sortColumn) {
          case "id":
            valueA = a.id;
            valueB = b.id;
            break;
          case "endDate":
            valueA = a.endDate;
            valueB = b.endDate;
            break;
          case "startDate":
            valueA = a.startDate;
            valueB = b.startDate;
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
      this.filteredPeriods = this.filteredPeriods.slice(start, end);
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

  onSort(
    column: keyof Period | "id" | "startDate" | "endDate" | "isClosed"
  ): void {
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

  closePeriod(periodId: number): void {
    this.periodsService.closePeriod(periodId).subscribe((data) => {
      this.refreshData();
    });
  }

  refreshData(): void {
    this.loadData();
  }

  createPeriod(): void {
    console.log("create period");
  }
}
