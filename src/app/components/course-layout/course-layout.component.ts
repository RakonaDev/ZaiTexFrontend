import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-layout',
  templateUrl: './course-layout.component.html',
  styleUrl: './course-layout.component.css'
})
export class CourseLayoutComponent {
  @Input() imagenUrl?: string;
  @Input() tituloCurso?: string;
  @Input() descCurso?: string;
  @Input() dirigido?: string;
  @Input() metodologia?: string;
  @Input() horasAcademicas?: string;
  @Input() duracionAprox?: string;
  @Input() horarios?: string;
  @Input() otorga?: string;
}
