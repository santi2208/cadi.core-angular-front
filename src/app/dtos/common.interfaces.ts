export interface GenericDescriptor {
  id: number;
  description: string;
}

export interface Period {
  id: number;
  startDate: Date;
  endDate: Date;
  isClosed: boolean;
}