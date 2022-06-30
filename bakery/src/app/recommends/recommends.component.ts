import { Component, OnInit } from '@angular/core';
import { Recommend } from '../interfaces/recommend.interface';
// import { RecommendServiceService } from '../services/recommend-service.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'recommends',
  templateUrl: './recommends.component.html',
  styleUrls: ['./recommends.component.scss']
})
export class RecommendsComponent implements OnInit {

  recommendJSON:Recommend[] =[];
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
    this.cs.showProduct().subscribe((recommend) => {
      console.log(recommend);
      this.recommendJSON = recommend;
    })
  }

}
