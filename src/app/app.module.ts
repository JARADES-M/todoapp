import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/about/about.component';

import {RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';

const appRoutes = [
  {path: '', component: TodoComponent},
  {path: 'about', component: AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AboutComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
