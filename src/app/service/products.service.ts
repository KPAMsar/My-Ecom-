import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})




export class ProductsService {
url = 'http://127.0.0.1:8004/api/prod';
getUrl ='http://127.0.0.1:8004/api/products';
picUrl = 'https://www.pexels.com/photo/cucumber-2329440/';


  constructor(private http:HttpClient) { }

  postAdminProduct(data:any){

   //let myheader=new Headers({'Content-Type': 'application/json', 'Authorization':'heheheh'});
     return this.http.post(this.url, data);

  }


  getProductDetails(){
   return this.http.get(this.getUrl);
  }
}
