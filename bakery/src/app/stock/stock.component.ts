import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @Input()totalStocks:number = 0;
  @Input()isLessStock:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
