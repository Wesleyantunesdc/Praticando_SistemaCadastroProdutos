import { Product } from './../modelo/Product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-updade',
  templateUrl: './product-updade.component.html',
  styleUrls: ['./product-updade.component.css']
})
export class ProductUpdadeComponent implements OnInit {

  product: Product

  constructor(
    private productService: ProductService, 
    private router: Router,
    private route : ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.product = this.productService.obterPorId(Number.parseInt(id));
  }

  updateProduct(): void{
    this.productService.atualizar(this.product)
    this.productService.showOnConsole("Produto atualizado com sucesso!")
    this.router.navigate(['/produtos'])
  }

  cancel(): void{
    this.router.navigate(['/produtos'])
  }

}
