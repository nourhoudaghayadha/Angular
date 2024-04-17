import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{MatDividerModule} from'@angular/material/divider'
import{MatListModule} from'@angular/material/list'
import{MatIconModule} from'@angular/material/icon'
import{MatMenuModule} from'@angular/material/menu'
import{MatToolbarModule} from'@angular/material/toolbar'
import{MatSidenavModule} from'@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,MatSidenavModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
