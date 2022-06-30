import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgUrl:string = "https://www.pexels.com/photo/3-zuchini-brown-wooden-surface-128420/";
  productDetail:any = {};

  constructor(private services:ProductsService) { }

  ngOnInit(): void {
  }

  getProduct(){
    this.services.getProductDetails().subscribe(
      (response)=>{
        // this.productDetail = response;
        console.log(response)
      }
    )
  }

}
