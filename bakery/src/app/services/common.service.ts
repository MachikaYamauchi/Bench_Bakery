import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recommend } from '../interfaces/recommend.interface';
import { Add, Delete, Login, OneProduct, SignUp, ToggleDisplay, UpdateProduct } from '../interfaces/common.interface';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  recommendURL = "http://localhost:4400/recommends";
  signupURL = "http://localhost:4400/signup";
  loginURL = "http://localhost:4400/login";
  showProductURL = "http://localhost:4400/showProduct";
  toggleDisplayURL = "http://localhost:4400/toggleDisplay"

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

  getAllReccomend() {
    return this.http.get<Recommend[]>(this.recommendURL);
  }

  showProduct() {
    return this.http.get<Recommend[]>(this.showProductURL);
  }

  add(image1:string, image2:string, image3:string, name:string, rating:number, price:string, stock:number, alt:string, description:string, display:string) {
    let addBody = {
      image1:image1,
      image2:image2,
      image3:image3,
      name:name,
      rating:rating,
      price:price,
      stock:stock,
      alt:alt,
      description:description,
      display:display
    }
    return this.http.post<Add>(this.recommendURL, addBody);
  }

  oneRecommend(id:number){
    return this.http.get<OneProduct>(this.recommendURL + "/" + id);
  }

  updateRecommend(productID:any, image1:string, image2:string, image3:string, name:string, rating:number, price:string, stock:number, alt:string, description:string, display:string){
    let updateBody = {
      productID:productID,
      image1:image1,
      image2:image2,
      image3:image3,
      name:name,
      rating:rating,
      price:price,
      stock:stock,
      alt:alt,
      description:description,
      display:display
    }
    return this.http.put<UpdateProduct>(this.recommendURL, updateBody);
  }

  delete(id:any) {
    return this.http.delete<Delete>(this.recommendURL + "/" + id)
  }

  toggleDisplay(id:any) {
    let postID = {
      id:id
    }
    return this.http.put<ToggleDisplay>(this.toggleDisplayURL, postID)
  }
}
