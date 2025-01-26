import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent);
  };

  scrollEvent = (event: Event): void => {
    const scroll = window.scrollY;
    const header = document.getElementById('header');

    if (scroll >= 300) {
      header?.setAttribute('class', 'show');
      header?.removeAttribute('style');
    }
    else {
      header?.setAttribute('class', 'hidden');
    }
  }

}
