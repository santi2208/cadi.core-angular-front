import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MovementsService } from "app/services/movements/movements.service";

@Component({
  selector: "generate-movements-button",
  templateUrl: "./generate-movements-button.component.html",
  styleUrls: ["./generate-movements-button.component.css"],
})
export class GenerateMovementsButtonComponent {
  @Input() batchId!: number;
  @Output() movementsGenerated = new EventEmitter<boolean>();
  constructor(
    private movementsService: MovementsService,
    private snackBar: MatSnackBar
  ) {}
  generateMovements(): void {
    if (this.batchId) {
      this.movementsService.createMovementsFromBatchId(this.batchId).subscribe({
        next: (response) => {
          this.movementsGenerated.emit(true);
          this.snackBar.open(response.message, "Cerrar", { duration: 3000 });
        },
        error: (response) => {
          this.movementsGenerated.emit(false);
          console.log(response);
          this.snackBar.open(
            `Error al generar los moviemientos del lote. Error: ${response.error.message}`,
            "Cerrar",
            { duration: 3000 }
          );
        },
      });
    }
  }
}
