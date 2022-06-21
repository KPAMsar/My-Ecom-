import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../service/products.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})



export class AdminProductsComponent implements OnInit {

imageUrl:any='https://www.pexels.com/photo/cucumber-2329440/';

  constructor(private services:ProductsService) { }
  Restock:any;
  ngOnInit(): void {
  }

  onProductSubmit( data:{
    name:string,
    price:string,
    category:string,
    quantity:string,
    image:string,
    description:string
  }){


     this.services.postAdminProduct(data).subscribe(
      (response) =>{
      console.log(response)
      },
      (error)=>{
        return 4
      }

     );
    // console.log(data)
  }
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};

}
