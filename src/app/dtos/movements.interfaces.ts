import { GenericDescriptor } from './common.interfaces'
export interface Period {
  id: number;
  startDate: Date;
  endDate: Date;
  isClosed: boolean;
}

export interface MovementDto {
  id: number;
  amount: number;
  createdDate: Date;
  createdByUser: GenericDescriptor;
  sourceAccount: GenericDescriptor;
  targetAccount: GenericDescriptor;
  period: Period;
}