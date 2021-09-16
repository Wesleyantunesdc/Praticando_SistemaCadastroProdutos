import { ListRange } from '@angular/cdk/collections';
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

  showOnConsole(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-sucess']
    })
  }

  create(produto: Product){
    let produtos = this.listar()
    produto.id = new Date().getTime()
    produtos.push(produto)
    localStorage['produtos'] = JSON.stringify(produtos)
  }

  listar():Product[]{
    const produtos = localStorage['produtos']
    return produtos? JSON.parse(produtos) : []
  }

  obterPorId(id:number){
    const produtos = this.listar()
    return produtos.find( p => p.id === id)
  }

  atualizar(produto: Product){
    const produtos: Product[] = this.listar()
    produtos.forEach((obj, index, objs) => {
      if(produto.id === obj.id){
        objs[index] = produto
      }
    })
    localStorage['produtos'] = JSON.stringify(produtos)
  }

  deletar(product:Product){
    let produtos: Product[] = this.listar()
    produtos  = produtos.filter( produto => produto.id !== product.id)
    localStorage['produtos'] = JSON.stringify(produtos)
  }
}
