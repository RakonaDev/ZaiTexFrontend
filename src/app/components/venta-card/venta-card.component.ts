import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-venta-card',
  templateUrl: './venta-card.component.html',
  styleUrl: './venta-card.component.css'
})
export class VentaCardComponent {
  @Input() img ?: string;
  @Input() nombre ?: string;
}
