import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor() {}

  isSoftware ?: boolean = true
  isTalleres ?: boolean = false
  isEspecialidades ?: boolean = false

  activarEstado (tipo : string, event : Event): void {
    if(tipo == "Software"){
      this.isSoftware = true
      this.isTalleres = false
      this.isEspecialidades = false
    
    }
    else if(tipo == "Talleres"){
      this.isTalleres = true
      this.isSoftware = false
      this.isEspecialidades = false
    
    }
    else if(tipo == "Especialidades"){
      this.isEspecialidades = true
      this.isTalleres = false
      this.isSoftware = false
    }
    console.log(tipo)
    console.log(event.target)
  }
}
