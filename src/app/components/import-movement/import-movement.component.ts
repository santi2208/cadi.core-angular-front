import { Component } from "@angular/core";
import { FileUploadService } from "../../services/file-upload/file-upload.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ImportLinesComponent } from "../import-lines/import-lines.component";
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

  constructor(
    private fileUploadService: FileUploadService,
    private snackBar: MatSnackBar
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
      console.log(this.period);
      const formattedPeriod = this.period.toString();
      this.fileUploadService.uploadFile(this.file, formattedPeriod).subscribe({
        next: (response) => {
          this.selectedBatchId = response.batchId;
          this.snackBar.open(response.message, "Cerrar", { duration: 3000 });
        },
        error: (response) => {
          console.log(response);
          this.snackBar.open(
            `Error al subir el archivo:${response.error.message}`,
            "Cerrar",
            { duration: 3000 }
          );
        },
      });
    }
  }
}
