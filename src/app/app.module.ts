import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApolloModule } from 'apollo-angular';
import { GraphQLModule } from './graphql.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ApolloModule, GraphQLModule ,HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
