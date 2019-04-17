import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContainerComponent } from './container/container.component';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserDetailsService } from './user-details.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { routingComponents } from './app-routing/app-routing.module';
import { PostLoginComponent } from './post-login/post-login.component';
//import { Images } from '@assets/images';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ContainerComponent,
    SectionComponent,
    LoginComponent,
    routingComponents,
    PostLoginComponent
    //Images
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    MaterialModule,
    BrowserAnimationsModule,
    //FormControl,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ UserDetailsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
