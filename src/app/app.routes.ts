import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MacComponent } from './pages/product/mac/mac.component';
import { PhoneComponent } from './pages/product/phone/phone.component';
import { IpadComponent } from './pages/product/ipad/ipad.component';
import { MusicComponent } from './pages/product/music/music.component';
import { WatchComponent } from './pages/product/watch/watch.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccessoriesComponent } from './pages/product/accessories/accessories.component';

export const routes: Routes = [
    {path:"", component:DashboardComponent},
    {path:"dashboard", component:DashboardComponent},
    {path:"mac", component:MacComponent},
    {path:"phone", component:PhoneComponent},
    {path:"ipad", component:IpadComponent},
    {path:"music", component:MusicComponent},
    {path:"watch", component:WatchComponent},
    {path:"login", component:LoginComponent},
    {path:"home", component:HomeComponent},
    {path:"register", component:RegisterComponent},
    {path:"profile", component:ProfileComponent},
    {path:"accessories", component:AccessoriesComponent},
];