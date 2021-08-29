import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity()
export class Produto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;
  
  @Column()
  nome: string;

  @Column()
  preco: number;

  constructor(codigo: string, nome: string, preco: number) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }
}
