import { ProductService } from './../product.service';
import { Product } from './../modelo/Product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]

  constructor(private produtoService:ProductService) { }

  ngOnInit(): void {
    this.products = this.produtoService.listar();
    console.log(this.products)
  }

}
