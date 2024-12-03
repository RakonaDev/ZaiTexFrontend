import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements OnInit {

  ngOnInit(): void {
    Aos.init({
      once: false,
      duration: 700,
      easing: 'ease-out-sine',
      offset: 200
    })
  }
}
