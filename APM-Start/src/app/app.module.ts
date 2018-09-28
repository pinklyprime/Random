import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { GamesComponent } from './games/games.component';
import {ConvertToSpacesPipe} from './shared/ConvertToSpaces.Pipe';

@NgModule({
  declarations: [ //our stuff
    AppComponent,
    ProductListComponent,
    GamesComponent,
    ConvertToSpacesPipe
  ],
  imports: [ //3rd party stuff
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
