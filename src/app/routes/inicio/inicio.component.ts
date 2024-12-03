import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  constructor() {}

  isSoftware ?: boolean = true
  isTalleres ?: boolean = false
  isEspecialidades ?: boolean = false

  ngOnInit(): void {
      Aos.init({
        once: false,
        duration: 700,
        easing: 'ease-out-sine',
        offset: 100
      })
  }

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
  }
}
