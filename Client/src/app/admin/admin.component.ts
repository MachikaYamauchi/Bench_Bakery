import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { Product } from '../interfaces/common.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  productsJSON:Product[] =[];

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
  display:any = 0;

  liveOnSite:string = "";

  addStatus = false;
  addDisplay = "none";
  addMessage:any = "";

  server = environment.bakeryserver;

  constructor(private cs:CommonService, private router:Router) { }

  toggleDisplay(id:any) {
    this.cs.toggleDisplay(id).subscribe(response=> {
    })
  }

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

  add() {
    this.cs.add(this.filename1, this.filename2, this.filename3, this.name, this.rating, this.price, this.stock, this.description, this.display).subscribe(addData=> {
      console.log(addData);
      this.addStatus = addData.add;
      this.addDisplay = "block";
      this.addMessage = addData.message
      this.cs.uploadFile(this.myformdate1).subscribe(uploadMessage => {
        console.log(uploadMessage);
      })
      this.cs.uploadFile(this.myformdate2).subscribe(uploadMessage => {
        console.log(uploadMessage);
      })
      this.cs.uploadFile(this.myformdate3).subscribe(uploadMessage => {
        console.log(uploadMessage);
      })
    })
  }

  delete(id:any){
    if(confirm("Are you sure?")) {
      this.cs.delete(id).subscribe(deletedata=> {
        console.log(deletedata);
        if(deletedata.delete) {
          this.ngOnInit();
        }
      })
    }
  }

  signOut() {
    if(confirm("Are you sure to sign out?")) {
      localStorage.setItem("userID", "0");
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.cs.getAllProducts().subscribe((products) => {
      console.log(products);
      this.productsJSON = products;
    })
  }

}
