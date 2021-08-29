import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './controller/produtos.controller';
import { Produto } from './model/produto.model';
import { ProdutosService } from './service/produtos.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE,
    entities: [Produto],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Produto])
],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
