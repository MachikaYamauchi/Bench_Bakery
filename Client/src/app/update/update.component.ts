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

  filename1:string = '';
  filename2:string = '';
  filename3:string = '';

  myformdate1:any;
  myformdate2:any;
  myformdate3:any;

  name:string = "";
  rating:number = 0;
  price:string = "";
  stock:number = 0;
  description:string = "";
  display:any = false;

  displayMessage:string = "none";
  showMesssgae:any = "";
  updateStatus:boolean = true;


  constructor(private cs:CommonService, private router:Router, private route:ActivatedRoute) { }

  trackFile1(event:any) {
    let myfile1 = event.target.files[0];
    this.filename1 = myfile1.name; // To use in "addNewTweet", put myfile.name into filename1
    const formdata1 = new FormData();
    formdata1.append("file_fromC", myfile1, myfile1.name);
    this.myformdate1 = formdata1;
    console.log(this.myformdate1)
  }

  trackFile2(event:any) {
    let myfile2 = event.target.files[0];
    this.filename2 = myfile2.name;
    const formdata2 = new FormData();
    formdata2.append("file_fromC", myfile2, myfile2.name);
    this.myformdate2 = formdata2;
    console.log(this.myformdate2)
  }

  trackFile3(event:any) {
    let myfile3 = event.target.files[0];
    this.filename3 = myfile3.name;
    const formdata3 = new FormData();
    formdata3.append("file_fromC", myfile3, myfile3.name);
    this.myformdate3 = formdata3;
    console.log(this.myformdate3)
  }

  updateProduct() {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.updateProduct(id, this.filename1, this.filename2, this.filename3, this.name, this.rating, this.price, this.stock, this.description, this.display).subscribe(updateData => {
      console.log(updateData);
      this.displayMessage = "block";
      this.updateStatus = updateData.update;
      this.cs.uploadFile(this.myformdate1).subscribe(uploadMessage => {
        console.log(uploadMessage);
      })
      this.cs.uploadFile(this.myformdate2).subscribe(uploadMessage => {
        console.log(uploadMessage);
      })
      this.cs.uploadFile(this.myformdate3).subscribe(uploadMessage => {
        console.log(uploadMessage);
      })

      if(updateData.update) {
        this.router.navigate(['/admin']);
      }
    })
  }

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.getProductByID(id).subscribe(productData=> {
      this.name = productData.name;
      this.rating = productData.rating;
      this.price = productData.price;
      this.stock = productData.stock;
      this.description = productData.description;
      this.display = productData.display;
      if(productData.display === "1") {
        this.display = true;
      }
      else {
        this.display = false;
      }
    })
  }

}
