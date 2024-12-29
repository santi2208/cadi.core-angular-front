import { GenericDescriptor, Period } from "./common.interfaces";
export interface AccountDto {
  id: number;
  number: string;
  name: string;
  parentAccount?: GenericDescriptor;
  currencyType: GenericDescriptor;
}

export interface AccountBalanceDto {
  id: number;
  account: AccountDto;
  balance: number;
  currencyType: GenericDescriptor;
  updatedDate: Date;
  updatedByUser: GenericDescriptor;
}

export interface AccountPeriodBalanceDto {
  id: number;
  account: AccountDto;
  period: Period;
  currencyType: GenericDescriptor;
  initialBalance: number;
  finalBalance: number;
  totalDebits  : number;
  totalCredits  : number;
  closedDate: Date;
  closedBy: GenericDescriptor;
}
