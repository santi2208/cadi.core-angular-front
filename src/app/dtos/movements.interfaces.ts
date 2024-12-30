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