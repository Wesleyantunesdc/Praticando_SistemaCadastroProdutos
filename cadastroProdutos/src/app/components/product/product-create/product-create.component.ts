import { Product } from './../modelo/Product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  produto: Product = {
    name : '',
    price : null
  }

  createProduct(): void{
    this.productService.create(this.produto)
    this.productService.showOnConsole('Produto criado')
    this.router.navigate(['/produtos'])
  }
  
  cancel(): void{
    this.router.navigate(['/produtos'])
  }
}
