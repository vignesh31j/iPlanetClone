import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Watches {
  img: string;
  name: string;
  price: number;
  ogprice: number;
}

@Component({
  selector: 'app-watch',
  imports: [CommonModule],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css'
})

export class WatchComponent {

  watches: Watches[] = [{img:"https://iplanet.one/cdn/shop/files/AWSE_LTE_44mm_Space_Gray_Aluminum_Anthracite_Black_Nike_Sport_Band_PDP_Image_Position-1__LAES_550x_550x_3a34851f-a6cf-442d-ad1b-04c0f2e093e1.webp?v=1715928085&width=550",name:"Apple Watch Nike",price:30000, ogprice:32000},
    {img:"https://iplanet.one/cdn/shop/files/Apple_Watch_SE_GPS_40mm_Starlight_Aluminum_Starlight_Sport_Band_34FR_Screen__USEN_994bddfc-30e0-4b9d-8ada-1e723d286c7f.webp?v=1715927945&width=550",name:"Apple Watch SE",price:26000,ogprice:29900},
    {img:"https://iplanet.one/cdn/shop/files/Apple_Watch_Ultra_LTE_49mm_Titanium_Green_Alpine_Loop_PDP_Image_Position-1__en-US_b86026e2-1cf7-4c4e-b8cf-0bea98c45eaf.webp?v=1715927365&width=550",name:"Apple Watch Ultra",price:85000,ogprice:89000},
    {img:"https://iplanet.one/cdn/shop/files/Apple_Watch_Ultra_2_49mm_Black_Titanium_Ocean_Band_Black_PDP_Image_Position_1__en-US.webp?v=1726052074&width=550",name:'Apple Watch Ultra 2' ,price: 85000, ogprice: 89000 }
  ]

}
