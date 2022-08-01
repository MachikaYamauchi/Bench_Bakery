export interface SignUp {
  signup:boolean;
  message:any;
}

export interface Login {
  login: boolean;
  message:string;
  data:[
    {
      id: number,
      username: string,
      email: string,
      password: string
    }
  ]
}

export interface Product {
  id:number;
  image1:string;
  image2:string;
  image3:string;
  name:string;
  rating:number;
  price:string;
  stock:number;
  alt:string;
  description:string
  display:any
}

export interface getProductByID {
  getOneProduct: boolean;
  message: string;
  data: [
    {
      id:number;
      image1: string;
      image2: string;
      image3: string;
      name: string;
      rating: number;
      price: string;
      stock: number;
      alt: string;
      description:string;
      display:any;
    }
  ]
}

export interface Add {
  add:boolean;
  message:string;
}

export interface UpdateProduct {
  update:boolean;
  message:string;
}

export interface Delete {
  delete:boolean;
  message:string;
}

export interface ToggleDisplay {
  toggleDisplay:boolean;
  message:string;
}
