import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'batch-detail-modal',
  templateUrl: './batch-detail-modal.component.html',
  styleUrls: ['./batch-detail-modal.component.css']
})
export class BatchDetailModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { batchId: number }) {}

  ngOnInit(): void {
  }

}
