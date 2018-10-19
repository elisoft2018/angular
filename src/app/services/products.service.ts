import { Injectable } from '@angular/core';
import { products } from '../shared/products';
import { PRODUCTS } from '../shared/List_Products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProducts():products[]{
    return PRODUCTS;

  }
  getProduct(id:number):products{
    return PRODUCTS.filter((prod)=>{return prod.id==id})[0];
  }
}
