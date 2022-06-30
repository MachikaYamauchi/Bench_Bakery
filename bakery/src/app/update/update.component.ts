import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent implements OnInit {

  image1:string = "";
  image2:string = "";
  image3:string = "";
  name:string = "";
  rating:number = 0;
  price:string = "";
  stock:number = 0;
  alt:string = "";
  description:string = "";
  display:any = false;

  displayMessage:string = "none";
  showMesssgae:any = "";
  updateStatus:boolean = true;




  constructor(private cs:CommonService, private router:Router, private route:ActivatedRoute) { }

  updateRecommend() {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.updateRecommend(id, this.image1, this.image2, this.image3, this.name, this.rating, this.price, this.stock, this.alt,this.description, this.display).subscribe(updateData => {
      console.log(updateData);
      this.displayMessage = "block";
      this.updateStatus = updateData.update;
      if(updateData.update) {
        this.router.navigate(['/admin']);
      }
    })
  }

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.oneRecommend(id).subscribe(productData=> {
      this.image1 = productData.data[0].image1;
      this.image2 = productData.data[0].image2;
      this.image3 = productData.data[0].image3;
      this.name = productData.data[0].name;
      this.rating = productData.data[0].rating;
      this.price = productData.data[0].price;
      this.stock = productData.data[0].stock;
      this.alt = productData.data[0].alt;
      this.description = productData.data[0].description;
      this.display = productData.data[0].display;
      if(productData.data[0].display === "1") {
        this.display = true;
      }
      else {
        this.display = false;
      }
    })
  }

}
