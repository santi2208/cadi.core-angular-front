import { GenericDescriptor, Period } from './common.interfaces'
import { AccountDto } from './accounts.interfaces'

export interface MovementDto {
  id: number;
  amount: number;
  createdDate: Date;
  createdByUser: GenericDescriptor;
  sourceAccount: AccountDto;
  targetAccount: AccountDto;
  period: Period;
}
export interface MovementLineWithStatus {
  id : number;
  date: Date;
  period: string;
  sourceAccountNumber: string;
  targetAccountNumber: string;
  currency: string;
  amount: number;
  details: string;
  lineNumber: number;
  importBatchesMovementsId: number;
  processingDate: Date;
  errors: string;
}