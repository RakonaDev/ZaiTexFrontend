import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  producto: string = 'Qué producto te interesa?';
  curso: string = this.producto === 'curso' ? 'Que curso te gustaría estudiar?' : 'Que taller te gustaría estudiar?';

  cursos = [
    { opcion: 'Que curso te gustaría estudiar?', valor: 'Que curso te gustaría estudiar?' },
    { opcion: 'Corel Draw', valor: 'Corel Draw' },
    { opcion: 'Adobe Illustrator', valor: 'Adobe Illustrator' },
    { opcion: 'Adobe Photoshop', valor: 'Adobe Photoshop' },
    { opcion: 'Adobe Illustrator', valor: 'Adobe Illustrator' },
  ]

  talleres = [
    { opcion: 'Que taller te gustaría estudiar?', valor: 'Que taller te gustaría estudiar?' },
    { opcion: 'Dibujo Tradicional', valor: 'Dibujo Tradicional' },
    { opcion: 'Ilustración Digital', valor: 'Ilustración Digital' },
  ]

  cambiarColor(event: any) {
    event.target.style.color = 'black';
  }
}
