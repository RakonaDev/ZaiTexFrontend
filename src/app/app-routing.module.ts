import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';
import { NosotrosComponent } from './routes/nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
