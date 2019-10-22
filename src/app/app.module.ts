import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import ButtonComponent from './shared/inspark-components-web/button/button.component';
import LinkComponent from './shared/inspark-components-web/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
