import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './components/background/background.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [BackgroundComponent]
})
export class AppComponent {
  title = 'portfolio';
}
