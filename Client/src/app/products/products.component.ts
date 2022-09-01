import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/common.interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsJSON:Product[] =[];
  display:any = false;
  displayProduct = "block";

  isLessStock(stockNumber:number) {
    if(stockNumber < 10) {
      return true;
    }
    else {
      return false;
    }
  }

  constructor(private cs:CommonService) { }



  ngOnInit(): void {
    this.cs.displayProduct().subscribe((products) => {
      console.log(products);
      this.productsJSON = products;
    })
  }

}
