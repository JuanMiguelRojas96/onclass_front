import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/atomic_design/pages/inicio/inicio.component';
import { BibliotecaComponent } from './components/atomic_design/pages/admin/biblioteca/biblioteca.component';
import { TecnologiasComponent } from './components/atomic_design/pages/admin/tecnologias/tecnologias.component';
import { BootcampsComponent } from './components/atomic_design/pages/admin/bootcamps/bootcamps.component';
import { CapacidadesComponent } from './components/atomic_design/pages/admin/capacidades/capacidades.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'biblioteca',component: BibliotecaComponent,
    children: [
      {path: 'tecnologias', component: TecnologiasComponent},
      {path: 'capacidades', component: CapacidadesComponent},
      {path: 'bootcamps', component: BootcampsComponent},
      {path: '**', redirectTo: 'tecnologias', pathMatch: 'full'}
    ]
   },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
