import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ProdutosService } from "src/service/produtos.service";

import { Produto } from '../model/produto.model'

@Controller("produtos")
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {

  }

  @Get()
  obterTodos(): Promise<Produto[]> {
    return this.produtosService.obterTodos();
  }

  @Get(":id")
  obterUm(@Param() params): string {
    return `Retorna os dados do produto ${this.produtosService.obterUm(params.id)}`;
  }

  @Post()
  criar(@Body() produto): string {
    this.produtosService.criar(produto)
    console.log(produto);
    return "Produto criado";
  }

  @Put(":id")
  alterar(@Body() produto,
        @Param() params): string {
    this.produtosService.alterar(params.id, produto);
    console.log(produto);
    return "Produto alterado";
  }

  @Delete(":id")
  apagar(@Param() params): string {
    this.produtosService.remove(params.id);
    return `Apaga o produto ${params.id}`;
  }
}
