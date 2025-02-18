import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories',
  imports: [CommonModule],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {

  accessories = [{img:"https://iplanet.one/cdn/shop/files/AMZ_FamilyStripe_iPhone_13_Accessories_550x_550x_2a1511d7-b08a-4fb9-ae9a-058166741cc5.webp?v=1715930824&width=550", name:"Mac Accessories"},
    {img:"https://iplanet.one/cdn/shop/files/iPad_mini_A17_Pro_Light_Violet_Smart_Folio_Pure_Front_Flap_Screen__USEN_1.webp?v=1729076471&width=550", name:"iPad Accessories"},
    {img:"https://iplanet.one/cdn/shop/files/AMZ_Family-Stripe_iPhone_Accessories_2.jpg?v=1726145365&width=550", name:"iPhone Accessories"},
    {img:"https://iplanet.one/cdn/shop/files/Watch_accessoires_v1.jpg?v=1726145366&width=550", name:"Apple Watch Accessories" },
    {img:"https://iplanet.one/cdn/shop/files/AirPods_PDP_Image_Position-1__en-IN_c84372c3-0f9e-4b86-866f-5c7b40dc38ab.webp?v=1715931034&width=550", name:"Music Accessories"}, 
    {img:"https://iplanet.one/cdn/shop/files/MM073_0f60f3da-f391-47a3-8e5b-bd9cd6784877.webp?v=1715931146&width=550", name:"AirTag Accessories" },
    {img:"https://iplanet.one/cdn/shop/files/Apple_TV_Remote_PDP_Image_Position-1_LAEN_R1_v1_550x_27f53ceb-18e4-45ac-acf8-93f4a1057269.webp?v=1715931096&width=550", name:"TV & Home Accessories" },
  ]
}
