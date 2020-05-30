import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Player extends Model<Player> {
  @Column
  name: string;

  @Column
  age: number;
}
