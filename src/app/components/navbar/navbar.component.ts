import { CommonModule } from '@angular/common';
import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  hidden: string = 'hidden';

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent);
  };

  scrollEvent = (event: Event): void => {
    const scroll = window.scrollY;
    const header = document.getElementById('header');

    if (scroll >= 300) {
      header?.setAttribute('class', 'show');
    }
    else {
      header?.setAttribute('class', 'hidden');
      this.hidden = 'visible';
    }
  }

}
