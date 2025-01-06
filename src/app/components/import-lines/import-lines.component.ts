import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ImportLinesServiceService } from "../../services/import-lines/import-lines-service.service";
import { MovementLineWithStatus } from "app/dtos/movements.interfaces";

@Component({
  selector: "import-lines",
  templateUrl: "./import-lines.component.html",
  styleUrls: ["./import-lines.component.css"],
})
export class ImportLinesComponent implements OnInit {
  @Input() batchId!: number;
  lines: MovementLineWithStatus[] = [];
  filteredLines: MovementLineWithStatus[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchTerm = "";
  sortColumn: keyof MovementLineWithStatus = "id";
  sortDirection: "asc" | "desc" = "asc";
  showErrorsOnly: boolean = false;

  public Math = Math;
  
  @Output() hasErrors = new EventEmitter<boolean>();
  constructor(private importLinesServiceService: ImportLinesServiceService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(): void {
    // this.loadData(); // Re-cargar los datos si el batchId cambia dinámicamente
  }

  private loadData(): void {
    if (this.batchId) {
      this.importLinesServiceService
        .getAllByBatchId(this.batchId)
        .subscribe((data) => {
          this.lines = data;
          const hasErrors = this.lines.some(e => e.errors !== null && e.errors !== "");
          this.hasErrors.emit(false);
          this.applyFilterAndSort();
        });
    }
  }

  applyFilterAndSort(): void {
    try {
      // Filtrar
      const searchTermLower = this.searchTerm.toLowerCase();
      this.filteredLines = this.lines.filter(
        (line) =>
          (line.sourceAccountNumber?.toLowerCase().includes(searchTermLower) ||
            line.targetAccountNumber?.toLowerCase().includes(searchTermLower) ||
            line.currency?.toLowerCase().includes(searchTermLower) ||
            line.details?.toLowerCase().includes(searchTermLower) ||
            line.lineNumber?.toString().toLowerCase().includes(searchTermLower) ||
            line.amount?.toString().toLowerCase().includes(searchTermLower) ||
            line.processingDate?.toString().toLowerCase().includes(searchTermLower)) &&
          (!this.showErrorsOnly || (line.errors && line.errors !== ""))
      );

      // Ordenar
      this.filteredLines.sort((a, b) => {
        let valueA: string | number | Date | undefined;
        let valueB: string | number | Date | undefined;

        switch (this.sortColumn) {
          case "sourceAccountNumber":
            valueA = a.sourceAccountNumber;
            valueB = b.sourceAccountNumber;
            break;
          case "targetAccountNumber":
            valueA = a.targetAccountNumber;
            valueB = b.targetAccountNumber;
            break;
          case "currency":
            valueA = a.currency;
            valueB = b.currency;
            break;
          case "details":
            valueA = a.details.toLowerCase();
            valueB = b.details.toLowerCase();
            break;
          case "lineNumber":
            valueA = a.lineNumber.toString();
            valueB = b.lineNumber.toString();
            break;
          case "amount":
            valueA = a.amount.toString();
            valueB = b.amount.toString();
            break;
          case "processingDate":
            valueA = a.processingDate.toString();
            valueB = b.processingDate.toString();
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
      this.filteredLines = this.filteredLines.slice(start, end);
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

  onSort(column: keyof MovementLineWithStatus | "id" | "date" | "period" | "sourceAccountNumber" | "targetAccountNumber" | "currency" | "amount" | "details" | "lineNumber" | "importBatchesMovementsId" | "processingDate" | "errors"): void {
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

  onErrorToggleChange(): void {
    this.currentPage = 1; // Reiniciar a la primera página
    this.applyFilterAndSort();
  }  
}
