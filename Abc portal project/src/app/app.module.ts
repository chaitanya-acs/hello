import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEngineerComponent } from './components/admin/add-engineer/add-engineer.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ChangeDomainComponent } from './components/admin/change-domain/change-domain.component';
import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home/home.component';
import { UpdateWarrentyComponent } from './components/product/update-warrenty/update-warrenty.component';
import { ComplaintsListComponent } from './components/product/complaints-list/complaints-list.component';
import { EngineersListComponent } from './components/product/engineers-list/engineers-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    AddEngineerComponent,
    AddProductComponent,
    ChangeDomainComponent,
    DeleteProductComponent,
    HomeComponent,
    UpdateWarrentyComponent,
    ComplaintsListComponent,
    EngineersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
