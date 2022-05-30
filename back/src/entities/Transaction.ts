import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
  } from 'typeorm';
  
  import User from './User';

  export enum TransactionType {
    ENTRADA = 'entrada',
    SAIDA = 'saida',
  }
  
  @Entity('transactions')
  export default class Transaction {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    title: string;

    @Column()
    description: string;
  
    @Column({ type: 'money' })
    amount: number;

    @Column('enum', { enum: TransactionType })
    type: TransactionType;
  
    @Column()
    user_id: number;
  
    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;
  
    @CreateDateColumn()
    created_at: Date;
  }
  