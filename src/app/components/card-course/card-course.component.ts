import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrl: './card-course.component.css'
})
export class CardCourseComponent {
  @Input() imagenImg ?:string;
  @Input() titleImg ?:string;
}
