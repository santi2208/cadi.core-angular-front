import { Component } from "@angular/core";
import { FileUploadService } from "../../services/file-upload/file-upload.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "import-movement",
  templateUrl: "./import-movement.component.html",
  styleUrls: ["./import-movement.component.css"],
})
export class ImportMovementComponent {
  file: File | null = null;
  fileName: string = "";
  period: Date | null = null;
  selectedBatchId: number;
  approvalStatus: boolean | null = null; // Variable para rastrear el estado de aprobación
  movementsCreated: boolean | null = null; // Variable para rastrear el estado de aprobación
  linesWithErrors: boolean = false; // Variable para deshabilitar el botón
  
  constructor(
    private fileUploadService: FileUploadService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      this.fileName = this.file.name;
    }
  }

  onSubmit(): void {
    if (this.file && this.period) {
      const formattedPeriod = this.period.toString();
      this.fileUploadService.uploadFile(this.file, formattedPeriod).subscribe({
        next: (response) => {
          this.selectedBatchId = response.batchId;
          this.snackBar.open(response.message, "Cerrar", { duration: 3000 });
        },
        error: (response) => {
          this.snackBar.open(
            `Error al subir el archivo: ${response.error.message}`,
            "Cerrar",
            { duration: 3000 }
          );
        },
      });
    }
  }

  onApproved(status: boolean): void {
    this.approvalStatus = status; // Registra el estado de aprobación
    console.log('Approval status:', status);
  }

  onMovementsCreated(status: boolean): void {
    this.movementsCreated = status; // Registra el estado de aprobación
    console.log('Movements created:', status);
  }

  onImportLinesErrors(hasError: boolean): void {
    // this.linesWithErrors = hasError;
    console.log("this.linesWithErrors");
    console.log(this.linesWithErrors);
  }

  viewMovements() {
    this.router.navigate(['/movement-grid']); // Ajusta la ruta según la configuración de tus rutas
  }
}
