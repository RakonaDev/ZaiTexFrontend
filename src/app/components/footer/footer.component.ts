import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
      Aos.init({
        once: false,
        duration: 700,
        easing: 'ease-out-sine',
        offset: 200
      })
  }
}
