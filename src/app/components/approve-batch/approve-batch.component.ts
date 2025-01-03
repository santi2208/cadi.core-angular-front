import { Component, Input, OnInit } from "@angular/core";
import { BatchService } from "app/services/batch/batch.service";

@Component({
  selector: "approve-batch",
  templateUrl: "./approve-batch.component.html",
  styleUrls: ["./approve-batch.component.css"],
})
export class ApproveBatchComponent {
  @Input() batchId!: number;
  constructor(private batchService: BatchService) {}

  approve(): void {
    if (this.batchId) {
      this.batchService.approve(this.batchId).subscribe({
        next: (response) => {
          console.log("Batch approved successfully:", response);
        },
        error: (error) => {
          console.error("Error approving batch:", error);
        },
      });
    }
  }
}
