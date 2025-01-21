import { Component } from '@angular/core';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { Engine } from '@tsparticles/engine';
import { loadStarsPreset } from '@tsparticles/preset-stars';

@Component({
  selector: 'app-background',
  imports: [NgxParticlesModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {

  id = "tsparticles";

  particleOptions = {
    preset: "stars",
  };

  particlesInit = async (engine: Engine): Promise<void> => {
    
    await loadStarsPreset(engine);
  };

}
