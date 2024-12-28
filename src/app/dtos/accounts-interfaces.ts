export interface GenericDescriptor {
  id: number;
  description: string;
}

export interface CurrencyType {
  id: number;
  description: string;
}

export interface AccountDto {
  id: number;
  number: string;
  name: string;
  parentAccount?: GenericDescriptor;
  currencyType: CurrencyType;
}

export interface AccountBalanceDto {
  id: number;
  account: AccountDto;
  balance: number;
  currencyType: CurrencyType;
  updatedDate: Date;
  updatedByUser: GenericDescriptor;
}
