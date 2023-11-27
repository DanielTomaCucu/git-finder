import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApolloModule } from 'apollo-angular';
import { GraphQLModule } from './graphql.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SpecificRepoModule } from './specific-repo/specific-repo.module';
import { UserReposModule } from './user-repos/user-repos.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MyProfileModule } from './my-profile/my-profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    GraphQLModule,
    HomeModule,
    MatIconModule,
    SpecificRepoModule,
    UserReposModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MyProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
