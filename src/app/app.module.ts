import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atomic_design/atom/button/button.component';
import { ItemSidebarComponent } from './components/atomic_design/atom/item-sidebar/item-sidebar.component';
import { SidebarComponent } from './components/atomic_design/molecules/sidebar/sidebar.component';
import { HeaderComponent } from './components/atomic_design/molecules/header/header.component';
import { NavbarComponent } from './components/atomic_design/organisms/navbar/navbar.component';
import { UserOptionComponent } from './components/atomic_design/atom/user-option/user-option.component';
import { NavOptionsComponent } from './components/atomic_design/molecules/nav-options/nav-options.component';
import { InicioTemplateComponent } from './components/atomic_design/templates/inicio-template/inicio-template.component';
import { InicioComponent } from './components/atomic_design/pages/inicio/inicio.component';
import { BibliotecaComponent } from './components/atomic_design/pages/admin/biblioteca/biblioteca.component';
import { BodyAdminComponent } from './components/atomic_design/organisms/body-admin/body-admin.component';
import { BibliotecaTemplateComponent } from './components/atomic_design/templates/admin/biblioteca-template/biblioteca-template.component';
import { TecnologiasComponent } from './components/atomic_design/pages/admin/tecnologias/tecnologias.component';
import { CapacidadesComponent } from './components/atomic_design/pages/admin/capacidades/capacidades.component';
import { BootcampsComponent } from './components/atomic_design/pages/admin/bootcamps/bootcamps.component';
import { ContentOptionsComponent } from './components/atomic_design/molecules/content-options/content-options.component';
import { ItemContentComponent } from './components/atomic_design/atom/item-content/item-content.component';
import { TecnologiasTemplateComponent } from './components/atomic_design/templates/admin/tecnologias-template/tecnologias-template.component';
import { TecnologiasService } from './components/shared/services/tecnologias/tecnologias.service';
import { CapitalizeFirstLetterPipe } from './components/shared/pipes/capitalize-first-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ItemSidebarComponent,
    SidebarComponent,
    HeaderComponent,
    NavbarComponent,
    UserOptionComponent,
    NavOptionsComponent,
    InicioTemplateComponent,
    InicioComponent,
    BibliotecaComponent,
    BodyAdminComponent,
    BibliotecaTemplateComponent,
    TecnologiasComponent,
    CapacidadesComponent,
    BootcampsComponent,
    ContentOptionsComponent,
    ItemContentComponent,
    TecnologiasTemplateComponent,
    CapitalizeFirstLetterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    TecnologiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
