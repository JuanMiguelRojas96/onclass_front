import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atomic_design/atom/button/button.component';
import { ItemSidebarComponent } from './components/atomic_design/atom/item-sidebar/item-sidebar.component';
import { SidebarComponent } from './components/atomic_design/molecules/sidebar/sidebar.component';
import { HeaderComponent } from './components/atomic_design/molecules/header/header.component';
import { AdminComponent } from './components/atomic_design/templates/admin/admin.component';
import { NavbarComponent } from './components/atomic_design/organisms/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ItemSidebarComponent,
    SidebarComponent,
    HeaderComponent,
    AdminComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
