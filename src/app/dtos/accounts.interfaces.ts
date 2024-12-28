import { GenericDescriptor } from './common.interfaces'
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
