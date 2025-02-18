import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Phones {
  img: string;
  name: string;
  price: string;
  ogprice: string;
}

@Component({
  selector: 'app-phone',
  imports: [CommonModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {

  phones: Phones[] = [{img:"https://b2b.iplanetstore.in/img/product/OnAr2iNqpOZiVLVD.jpg",name:"iPhone 16",price:"1,03,874", ogprice:"1,09,900"},
    {img:"https://b2b.iplanetstore.in/img/product/A3EmLi9TnGRJ8y7I.jpg",name:"iPhone 16 Plus",price:"1,13,326",ogprice:"1,19,900"},
    {img:"https://b2b.iplanetstore.in/img/product/BUvRrBg5Y90UJvwL.jpg",name:"iPhone 16 Pro",price:"1,41,681",ogprice:"1,49,900"},
    {img:"https://b2b.iplanetstore.in/img/product/bomvsQpJPNaIumhM.jpg",name:"iPhone 16 Pro Max" ,price:"1,74,762", ogprice:"1,84,900" }
  ]
}
