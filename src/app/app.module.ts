import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { DemoMaterialModule } from '../material-module';
import { OrderDetailsComponent } from './search-user/order-details/order-details.component';
import { UsersResolver } from './search-user/order.resolver';
import { routing } from './app-routing.module';
import { ApiRequestService } from './service/api-request.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    NgxDaterangepickerMd.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [UsersResolver, ApiRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
