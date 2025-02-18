import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ipad',
  imports: [CommonModule],
  templateUrl: './ipad.component.html',
  styleUrl: './ipad.component.css'
})
export class IpadComponent {

  ipads = [{img:"https://iplanet.one/cdn/shop/files/IMG-7824452_2200x_550x_550x_8f73ac9c-6c41-483d-bfee-cba6bdf8e5ae.webp?v=1715923178&width=550",name:"iPad",price:"30,874", ogprice:"33,900"},
    {img:"https://iplanet.one/cdn/shop/files/iPad_mini_Purple_PDP_Image_Position_1b_Cellular__en-US_1.webp?v=1729062824&width=550",name:"iPad Mini",price:"43,326",ogprice:"49,900"},
    {img:"https://iplanet.one/cdn/shop/files/iPad_Air_13-inch_M2_Chip_Wi-Fi_Blue_2-Up_Screen__USEN.webp?v=1715174339&width=550",name:"iPad Air",price:"71,681",ogprice:"74,900"},
    {img:"https://iplanet.one/cdn/shop/files/iPad_Pro_11-inch_M4_Chip_Cellular_Silver_Screen__USEN_52ef3c34-4668-4b5a-8813-5139b0ae9c3c.webp?v=1715923159&width=550",name:"iPad Pro" ,price:"1,13,762", ogprice:"1,19,900" }
  ]
}
