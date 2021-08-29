import { Injectable } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { Produto } from "src/model/produto.model";
import { Repository } from "typeorm";

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepositoy: Repository<Produto>,
  ) {}

  async obterTodos(): Promise<Produto[]> {
    return this.produtoRepositoy.find();
  }

  async obterUm(id: number): Promise<Produto> {
    return this.produtoRepositoy.findOne(id);
  }

  async criar(produto: Produto) {
    this.produtoRepositoy.save(produto);
  }

  async alterar(id: string, produto: Produto) {
    return this.produtoRepositoy.update(id, produto);
  }

  async remove(id: number): Promise<void> {
    this.produtoRepositoy.delete(id);
  }

}