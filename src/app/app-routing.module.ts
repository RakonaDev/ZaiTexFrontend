import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';
import { NosotrosComponent } from './routes/nosotros/nosotros.component';
import { CorelDrawComponent } from './routes/corel-draw/corel-draw.component';
import { AdobeIlustratorComponent } from './routes/adobe-ilustrator/adobe-ilustrator.component';
import { AdobePhotoshopComponent } from './routes/adobe-photoshop/adobe-photoshop.component';
import { MarketingDigitalComponent } from './routes/marketing-digital/marketing-digital.component';
import { AutocadComponent } from './routes/autocad/autocad.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'cursos/corel-draw', component: CorelDrawComponent },
  { path: 'cursos/adobe-illustrator', component: AdobeIlustratorComponent },
  { path: 'cursos/adobe-photoshop', component: AdobePhotoshopComponent },
  { path: 'cursos/marketing-digital', component: MarketingDigitalComponent },
  { path: 'cursos/autocad-para-interiores', component: AutocadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
