import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientDataComponent } from './client-data/client-data.component';
import { ClientListComponent } from './/client-data/client-list/client-list.component';
import { ClientInputComponent } from './client-data/client-input/client-input.component';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';
import { NavbarComponent } from './client-data/utils/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import {ClientService} from './client-data/shared/client.service';
import {ReactiveClientInputComponent} from './client-data/reactive-client-input/reactive-client-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDataComponent,
    ClientListComponent,
    ClientInputComponent,
    NavbarComponent,
    ReactiveClientInputComponent
  ],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      FormsModule,
      ReactiveFormsModule,
      TextMaskModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule, 
      AppRoutingModule,       ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
