import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './modelo/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showOnConsole(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(produto: Product){
    let produtos = this.listar()
    produto.id = new Date().getTime()
    produtos.push(produto)
    localStorage['produtos'] = JSON.stringify(produtos)
  }

  listar(){
    const produtos = localStorage['produtos']
    return produtos? JSON.parse(produtos) : [];
  }
}
