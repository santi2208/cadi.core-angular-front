export interface Batch {
  id: number;
  fileName: string;
  createdDate: Date;
  createdBy: number;
  approvedDate: Date;
  approvedBy: number;
  hasErrors: boolean;
}
