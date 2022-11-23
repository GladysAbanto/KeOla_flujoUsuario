import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { RestablecimientoComponent } from './restablecimiento/restablecimiento.component';
import { VerificacionComponent } from './verificacion/verificacion.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'restablecimiento',
    component: RestablecimientoComponent,
  },
  { path: 'verificacion', component: VerificacionComponent },
  { path: 'perfil', component: PerfilComponent },
  {
    path: 'modificacion',
    component: ModificacionComponent,
  },
  { path: 'inicio', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
