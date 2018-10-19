import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { products } from 'src/app/shared/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  producto:products;
  todos:products[];
  constructor(public productsService:ProductsService) { }

  ngOnInit() {

    //this.producto=this.productsService.getProduct(1);
    this.todos=this.productsService.getProducts();



   /*console.log(this.productsService.getProduct(1));
    console.log(this.productsService.getProduct(2));
    console.log(this.productsService.getProduct(3));*/
    console.log(this.todos);

}
}
