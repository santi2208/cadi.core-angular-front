import { Component, OnInit } from "@angular/core";
import { Batch } from "app/dtos/batches.interfaces";
import { BatchService } from "app/services/batch/batch.service";

@Component({
  selector: "batches-grid",
  templateUrl: "./batches-grid.component.html",
  styleUrls: ["./batches-grid.component.css"],
})
export class BatchesGridComponent implements OnInit {
  batch: Batch[] = [];
  filteredBatches: Batch[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchTerm = "";
  sortColumn: keyof Batch = "id";
  sortDirection: "asc" | "desc" = "asc";
  public Math = Math;

  constructor(private batchService: BatchService) {}

  ngOnInit(): void {
    this.batchService.getAll().subscribe((data) => {
      this.batch = data;
      this.applyFilterAndSort();
    });
  }

  applyFilterAndSort(): void {
    try {
      // Filtrar
      const searchTermLower = this.searchTerm.toLowerCase();
      this.filteredBatches = this.batch.filter(
        (batch) =>
          batch.fileName.toLowerCase().includes(searchTermLower) ||
          batch.createdDate
            .toString()
            .toLowerCase()
            .includes(searchTermLower) ||
          batch.approvedDate
            ?.toString()
            ?.toLowerCase()
            .includes(searchTermLower)
      );

      // Ordenar
      this.filteredBatches.sort((a, b) => {
        const valueA =
          this.sortColumn === "approvedDate" ||
          this.sortColumn === "createdDate"
            ? (a[this.sortColumn] || "").toString().toLowerCase()
            : (a[this.sortColumn] || "").toString().toLowerCase();

        const valueB =
          this.sortColumn === "fileName"
            ? (b[this.sortColumn] || "").toLowerCase()
            : (b[this.sortColumn] || "").toString().toLowerCase();

        if (valueA < valueB) return this.sortDirection === "asc" ? -1 : 1;
        if (valueA > valueB) return this.sortDirection === "asc" ? 1 : -1;
        return 0;
      });

      // Paginar
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      this.filteredBatches = this.filteredBatches.slice(start, end);
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

  onSort(column: keyof Batch): void {
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
