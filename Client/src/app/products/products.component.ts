import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/common.interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  server = environment.bakeryserver;

  productsJSON:Product[] =[];
  stars:number[] = [];
  display:any = false;
  displayProduct = "block";

  constructor(private cs:CommonService) { }

    isLessStock(stockNumber:number) {
      if(stockNumber < 10) {
        return true;
      }
      else {
        return false;
      }
    }

  ngOnInit(): void {
    this.cs.displayProduct().subscribe((products) => {
      console.log(products);
      this.productsJSON = products;
    })
  }

}
