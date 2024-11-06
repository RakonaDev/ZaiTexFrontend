
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'ZaitexNG';
  esInicio = false;
  esNosotros = false;

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    )
    .subscribe((event: NavigationEnd) => {
      const currentUrl = event.urlAfterRedirects;
      window.scrollTo(0,0)

      if (currentUrl === '/') {
        this.esInicio = true;
        this.esNosotros = false;
      } else if (currentUrl === '/nosotros') {
        this.esInicio = false;
        this.esNosotros = true;
      }
      else if (currentUrl.includes('/cursos')) {
        this.esInicio = false;
        this.esNosotros = false;
      }
    });
  }

  ngOnDestroy(): void {
      
  }
}
