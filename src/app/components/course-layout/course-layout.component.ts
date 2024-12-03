import { Component, Input, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-course-layout',
  templateUrl: './course-layout.component.html',
  styleUrl: './course-layout.component.css'
})
export class CourseLayoutComponent implements OnInit{
  @Input() imagenUrl?: string;
  @Input() tituloCurso?: string;
  @Input() descCurso?: string;
  @Input() dirigido?: string;
  @Input() metodologia?: string;
  @Input() horasAcademicas?: string;
  @Input() duracionAprox?: string;
  @Input() horarios?: string;
  @Input() otorga?: string;

  ngOnInit(): void {
    Aos.init({
      once: false,
      duration: 700,
      easing: 'ease-out-sine',
      offset: 100
    })
  }
}
