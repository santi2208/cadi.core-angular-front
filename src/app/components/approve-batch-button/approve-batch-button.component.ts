import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BatchService } from "app/services/batch/batch.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'approve-batch-button',
  templateUrl: './approve-batch-button.component.html',
  styleUrls: ['./approve-batch-button.component.css']
})
export class ApproveBatchButtonComponent {
  @Input() batchId!: number;
  @Output() approved = new EventEmitter<boolean>(); // Emite evento cuando la aprobación es exitosa
  constructor(
    private batchService: BatchService,
    private snackBar: MatSnackBar
  ) { }
  approve(): void {
    if (this.batchId) {
      this.batchService.approve(this.batchId).subscribe({
        next: (response) => {
          this.snackBar.open(response.message, "Cerrar", { duration: 3000 });
        },
        error: (response) => {
          console.log(response);
          this.snackBar.open(
            `Error al subir el archivo:${response.error.message}`,
            "Cerrar",
            { duration: 3000 }
          );
        }
      });
    }
  }
}
