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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    HeaderComponent,
    FooterComponent,
    CardCourseComponent,
    CommentsComponent,
    EquipoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
