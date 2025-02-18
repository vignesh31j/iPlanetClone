import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Musics {
  img: string;
  name: string;
  price: string;
  ogprice: string;
}

@Component({
  selector: 'app-music',
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  musics: Musics[] = [{img:"https://iplanet.one/cdn/shop/files/AirPods_PDP_Image_Position-1__en-IN_550x_c48cdce6-5b8a-45f6-b38b-983a8a7737da.webp?v=1715928586&width=550",name:"AirPods",price:"10,874", ogprice:"12,900"},
    {img:"https://iplanet.one/cdn/shop/files/airpods_pro_PDP_US_1_550x_550x_0a792889-c804-4077-bd86-5bd216bf29d9.webp?v=1715928508&width=550",name:"AirPods Pro",price:"21,326",ogprice:"24,900"},
    {img:"https://iplanet.one/cdn/shop/files/AirPods_Max_2024_Midnight_PDP_Image_Position_1__en-US.webp?v=1726055575&width=550",name:"AirPods Max",price:"51,681",ogprice:"59,900"},
    {img:"https://iplanet.one/cdn/shop/files/HomePod_PDP_Image_Position-1__en-US_750x_550x_8ee2bdab-3888-4ae4-a3a5-e05d9bc29882.jpg?v=1715928646&width=550",name:"HomePod" ,price:"29,762", ogprice:"32,900" }
  ]
}
