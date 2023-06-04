import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnilModule } from './anil/anil.module';
import { EzilModule } from './ezil/ezil.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,AnilModule,EzilModule,FormsModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
