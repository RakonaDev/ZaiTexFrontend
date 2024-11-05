import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  producto: string = 'Qué producto te interesa?';
  curso: string = 'Que taller te gustaría estudiar?';
  provincia: string = 'Escoja su Departamento de procedencia';
  nombre: string = '';
  apellido: string = '';
  celular?: number;
  dni: string = '';
  email: string = '';

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

  departamentosPeru = [
    { opcion: 'Escoja su Departamento de procedencia', valor: 'Escoja su Departamento de procedencia'},
    { opcion: "Lima", valor: "Lima" },
    { opcion: "Arequipa", valor: "Arequipa" },
    { opcion: "Cuzco", valor: "Cuzco" },
    { opcion: "Piura", valor: "Piura" },
    { opcion: "La Libertad", valor: "La Libertad" },
    { opcion: "Lambayeque", valor: "Lambayeque" },
    { opcion: "Puno", valor: "Puno" },
    { opcion: "Junín", valor: "Junín" },
    { opcion: "Amazonas", valor: "Amazonas" },
    { opcion: "Ayacucho", valor: "Ayacucho" },
    { opcion: "Apurímac", valor: "Apurímac" },
    { opcion: "Huancavelica", valor: "Huancavelica" },
    { opcion: "Pasco", valor: "Pasco" },
    { opcion: "Huánuco", valor: "Huánuco" },
    { opcion: "Ica", valor: "Ica" },
    { opcion: "San Martín", valor: "San Martín" },
    { opcion: "Ucayali", valor: "Ucayali" },
    { opcion: "Tumbes", valor: "Tumbes" },
    { opcion: "Madre de Dios", valor: "Madre de Dios" },
    { opcion: "Callao", valor: "Callao" },
    { opcion: "Ancash", valor: "Ancash" },
    { opcion: "Loreto", valor: "Loreto" },
    { opcion: "Tacna", valor: "Tacna" },
    { opcion: "Moquegua", valor: "Moquegua" },
    { opcion: "Cajamarca", valor: "Cajamarca" },
    { opcion: "La Libertad", valor: "La Libertad" },
    { opcion: "Lima Provincias", valor: "Lima Provincias" }
];

  cambiarColor(event: any, tipo: string = 'producto') {
    if (tipo === 'producto') {
      event.target.style.color = 'black';
    }
    if (event.target.value == 'curso') {
      this.curso = 'Que curso te gustaría estudiar?'
    }
    else if (event.target.value == 'taller') {
      this.curso = 'Que taller te gustaría estudiar?'
    }
  }
}
