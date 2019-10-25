import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { LoginComponent } from './front/login/login.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { ArticleComponent } from './admin/article/article.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    DashboardComponent,
    UserComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }, // front
      { path: 'login', component: LoginComponent },
      { path: 'admin/home', component: DashboardComponent }, // back
      { path: 'admin/user', component: UserComponent },
      { path: 'admin/article', component: ArticleComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
