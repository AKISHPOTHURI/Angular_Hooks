import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VueComponent } from './vue/vue.component';
import { NetComponent } from './net/net.component';



@NgModule({
  declarations: [
    VueComponent,
    NetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnilModule { }
