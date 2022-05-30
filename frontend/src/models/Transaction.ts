export enum TransactionType {
  SAIDA = 'saida',
  ENTRADA = 'entrada',
}

export interface Transaction {
  id: number;
  title: string;
  description: string;
  amount: number;
  type: TransactionType;
  created_at: Date;
}
