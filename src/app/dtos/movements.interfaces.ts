import { GenericDescriptor, Period } from './common.interfaces'

export interface MovementDto {
  id: number;
  amount: number;
  createdDate: Date;
  createdByUser: GenericDescriptor;
  sourceAccount: GenericDescriptor;
  targetAccount: GenericDescriptor;
  period: Period;
}