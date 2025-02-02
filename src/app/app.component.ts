import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { loadStarsPreset } from '@tsparticles/preset-stars';
import { NgxParticlesModule } from '@tsparticles/angular';
import { Engine } from '@tsparticles/engine';
import { AboutMeComponent } from "./components/about-me/about-me.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NgxParticlesModule, NavbarComponent, HomeComponent, AboutMeComponent]
})
export class AppComponent {
  title = 'portfolio';

    id = "tsparticles";
  
    particleOptions = {
      preset: "stars",
    };
  
    particlesInit = async (engine: Engine): Promise<void> => {
      
      await loadStarsPreset(engine);
    };
  
}
