import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './routes/inicio/inicio.component';
import { NosotrosComponent } from './routes/nosotros/nosotros.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardCourseComponent } from './components/card-course/card-course.component';
import { CommentsComponent } from './components/comments/comments.component';
import { EquipoCardComponent } from './components/equipo-card/equipo-card.component';
import { NgOptimizedImage } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { CourseLayoutComponent } from './components/course-layout/course-layout.component';
import { CorelDrawComponent } from './routes/corel-draw/corel-draw.component';
import { AdobeIlustratorComponent } from './routes/adobe-ilustrator/adobe-ilustrator.component';
import { AdobePhotoshopComponent } from './routes/adobe-photoshop/adobe-photoshop.component';
import { AutocadComponent } from './routes/autocad/autocad.component';
import { MarketingDigitalComponent } from './routes/marketing-digital/marketing-digital.component';
import { VentaCorporativaComponent } from './routes/venta-corporativa/venta-corporativa.component';
import { VentaCardComponent } from './components/venta-card/venta-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    HeaderComponent,
    FooterComponent,
    CardCourseComponent,
    CommentsComponent,
    EquipoCardComponent,
    FormComponent,
    CourseLayoutComponent,
    CorelDrawComponent,
    AdobeIlustratorComponent,
    AdobePhotoshopComponent,
    AutocadComponent,
    MarketingDigitalComponent,
    VentaCorporativaComponent,
    VentaCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
