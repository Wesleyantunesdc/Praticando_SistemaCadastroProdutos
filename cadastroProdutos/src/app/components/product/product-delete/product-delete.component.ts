import { Product } from './../modelo/Product.model';
import { ProductService } from './../product.service';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.product = this.productService.obterPorId(Number.parseInt(id))
    
  }

  deleteProduct():void{
    this.productService.deletar(this.product) 
    this.productService.showOnConsole("Produto deletado com sucesso!")
    this.router.navigate(['/produtos'])
  }

  cancel(): void{
    this.router.navigate(['/produtos'])
  }

}
