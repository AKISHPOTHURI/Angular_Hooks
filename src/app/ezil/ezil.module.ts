import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngComponent } from './ang/ang.component';
import { AdoComponent } from './ado/ado.component';



@NgModule({
  declarations: [
    AngComponent,
    AdoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EzilModule { }
