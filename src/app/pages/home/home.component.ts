import { Component } from '@angular/core';
import { MacComponent } from "../product/mac/mac.component";
import { PhoneComponent } from "../product/phone/phone.component";
import { IpadComponent } from "../product/ipad/ipad.component";
import { WatchComponent } from "../product/watch/watch.component";
import { MusicComponent } from "../product/music/music.component";

@Component({
  selector: 'app-home',
  imports: [MacComponent, PhoneComponent, IpadComponent, WatchComponent, MusicComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
