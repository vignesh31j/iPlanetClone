import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  products = [{img:"https://iplanet.one/cdn/shop/files/IMG-7824452_2200x_550x_550x_8f73ac9c-6c41-483d-bfee-cba6bdf8e5ae.webp?v=1715923178&width=550", name:"iPads", linkUrl:"/ipad"},
    {img:"https://iplanet.one/cdn/shop/files/MacBook_Air_15-in_M2_Chip_Midnight_Pure_Front_Screen__USEN_550x_92bcb510-0af8-4b84-bb90-f0ef82c56ca6.webp?v=1730708357&width=550", name:"MacBook Air", linkUrl:"/mac"},
    {img:"https://b2b.iplanetstore.in/img/product/A3EmLi9TnGRJ8y7I.jpg", name:"iPhones", linkUrl:"/phone"},
    {img:"https://iplanet.one/cdn/shop/files/AirPods_Max_2024_Midnight_PDP_Image_Position_1__en-US.webp?v=1726055575&width=550", name:"AirPods", linkUrl:"/music"},
    {img:"https://iplanet.one/cdn/shop/files/Apple_Watch_Ultra_2_49mm_Black_Titanium_Ocean_Band_Black_PDP_Image_Position_1__en-US.webp?v=1726052074&width=550", name:'Apple Watchs', linkUrl:"/watch"},
  ]
}