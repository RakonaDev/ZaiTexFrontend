import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
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
      if (currentUrl === '/') {
        this.esInicio = true;
        this.esNosotros = false;
      } else if (currentUrl === '/nosotros') {
        this.esInicio = false;
        this.esNosotros = true;
      }
    });
  }

  ngOnDestroy(): void {
      
  }
}
