import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipo-card',
  templateUrl: './equipo-card.component.html',
  styleUrl: './equipo-card.component.css'
})
export class EquipoCardComponent {

  @Input() nombreImg ?: string;
  @Input() nombre ?: string;
  @Input() cargo ?: string;

}
