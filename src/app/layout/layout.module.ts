import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CarouselModule} from "primeng/carousel";
import {RouterModule} from "@angular/router";
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    ButtonModule
  ]
})
export class LayoutModule {
}
