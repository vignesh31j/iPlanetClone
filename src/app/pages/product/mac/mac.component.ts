import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mac',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mac.component.html',
  styleUrl: './mac.component.css'
})
export class MacComponent {

  macs = [{img:"https://iplanet.one/cdn/shop/files/iMac_M4_Chip_2-port_24-in_Blue_PDP_Image_Position_1__en-US.webp?v=1730707202&width=550",name:"iMac", price:145874, ogprice:"1,50,253", quantity:1},
    {img:"https://iplanet.one/cdn/shop/files/Mac_mini_with_M4_Silver_PDP_Image_Position_1__en-US.png?v=1730699599&width=550",name:"Mac Mini", price:53326, ogprice:"58,103", quantity:1},
    {img:"https://iplanet.one/cdn/shop/files/MacBook_Pro_14-in_M4_Space_Black_Pure_Front_Screen__USEN.png?v=1730698240&width=550",name:"MacBook Pro", price:120681, ogprice:"1,23,405", quantity:1},
    {img:"https://iplanet.one/cdn/shop/files/MacBook_Air_15-in_M2_Chip_Midnight_Pure_Front_Screen__USEN_550x_92bcb510-0af8-4b84-bb90-f0ef82c56ca6.webp?v=1730708357&width=550",name:"MacBook Air" , price:130762, ogprice:"1,34,900", quantity:1 }
  ]

  cart: any[] = [];

  addToCart(mac: any){
    const existingProduct = this.cart.find((item) => item.name === mac.name)

    if (existingProduct){
      existingProduct.quantity += 1;
    }

    else{
      this.cart.push({ ...mac, quantity: 1});
    }

    // console.log('cart:', this.cart)
  }
}
