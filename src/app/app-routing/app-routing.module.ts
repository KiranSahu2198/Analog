import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ContainerComponent } from '../container/container.component';
import { SectionComponent } from '../section/section.component';
import { LoginComponent } from '../login/login.component';
import { PostLoginComponent } from '../post-login/post-login.component';

const routes: Routes = [
  { path: 'LoginComponent', component: LoginComponent },
  { path: 'PostLoginComponent', component: PostLoginComponent },
  { path: 'HeaderComponent', component: HeaderComponent },
  { path: 'SideBarComponent', component: SideBarComponent },
  { path: 'SectionComponent', component: SectionComponent },
  { path: 'ContainerComponent', component: ContainerComponent },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
export const routingComponents = [PostLoginComponent,
                                  HeaderComponent,
                                  SideBarComponent,
                                  ContainerComponent,
                                  SectionComponent,
                                  LoginComponent];
