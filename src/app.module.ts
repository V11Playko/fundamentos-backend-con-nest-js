import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
