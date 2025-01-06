export interface Batch {
  id: number;
  fileName: string;
  createdDate: Date;
  createdBy: number;
  approvedDate: Date;
  redeemedDate: Date;
  approvedBy: number;
  hasErrors: boolean;
  linesCount: number;
}
