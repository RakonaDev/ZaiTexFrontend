import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-venta-corporativa',
  templateUrl: './venta-corporativa.component.html',
  styleUrl: './venta-corporativa.component.css'
})
export class VentaCorporativaComponent implements OnInit {

  ngOnInit(): void {
      Aos.init({
        once: false,
        duration: 700,
        easing: 'ease-in-out-sine',
        offset: 0
      });
  }
}
