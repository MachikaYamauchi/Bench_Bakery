import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, Add, Delete, Login, ToggleDisplay, UpdateProduct, SignUp } from '../interfaces/common.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private productsURL = environment.bakeryserver + "/products";
  private signupURL = "http://localhost:4400/signup";
  private loginURL = environment.bakeryserver + "/login";
  private displayProductURL = environment.bakeryserver + "/displayProduct";
  private toggleDisplayURL = environment.bakeryserver + "/toggleDisplay";
  private fileuploadURL = environment.bakeryserver + "/upload";

  constructor(private http:HttpClient) { }

  signup(username:string, email:string, password:string) {
    let signupBody = {
      username:username,
      email:email,
      password:password
    }
    return this.http.post<SignUp>(this.signupURL, signupBody);
  }

  login(username:string, password:string) {
    let loginBody = {
      username:username,
      password:password
    }
    return this.http.post<Login>(this.loginURL, loginBody);
  }

  getAllProducts() {
    return this.http.get<Product[]>(this.productsURL);
  }

  displayProduct() {
    return this.http.get<Product[]>(this.displayProductURL);
  }

  add(image1:string, image2:string, image3:string, name:string, rating:number, price:string, stock:number, description:string, display:string) {
    let addBody = {
      image1:image1,
      image2:image2,
      image3:image3,
      name:name,
      rating:rating,
      price:price,
      stock:stock,
      description:description,
      display:display
    }
    return this.http.post<Add>(this.productsURL, addBody);
  }

  getProductByID(id:number){
    return this.http.get<Product>(this.productsURL + "/" + id);
  }

  updateProduct(productID:any, image1:string, image2:string, image3:string, name:string, rating:number, price:string, stock:number, description:string, display:string){
    let updateBody = {
      productID:productID,
      image1:image1,
      image2:image2,
      image3:image3,
      name:name,
      rating:rating,
      price:price,
      stock:stock,
      description:description,
      display:display
    }
    return this.http.put<UpdateProduct>(this.productsURL, updateBody);
  }

  delete(id:any) {
    return this.http.delete<Delete>(this.productsURL + "/" + id)
  }

  toggleDisplay(id:any) {
    let postID = {
      id:id
    }
    return this.http.put<ToggleDisplay>(this.toggleDisplayURL, postID)
  }

  uploadFile(formdata:any) {
    return this.http.post(this.fileuploadURL, formdata)
  }
}
