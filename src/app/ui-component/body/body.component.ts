import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  stagger,
  query,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('fadeInSequence', [
      transition('* => *', [
        query(
          '.word',
          [
            style({ opacity: 0 }), // Initial state: all words are hidden
            stagger(1000, [
              animate(
                '1s ease-in-out',
                style({ opacity: 1 }) // Fade in each word without fading out
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    ,
    trigger('downSlide', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate(
          '0.5s ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class BodyComponent {
  words = ['Hi!!', 'Manish', 'Here'];
  animationState = false;

  constructor() {
    this.startAnimationLoop();
  }

  startAnimationLoop() {
    setInterval(() => {
      this.animationState = !this.animationState; // Toggle the animation state
    }, 6000); // Adjust interval to match the total animation duration
  }

  titles = ['Full Stack Developer', 'AWS', 'Github Copilot'];
  currentTitle = '';
  animate = false;
  private titleIndex = 0;

  ngOnInit(): void {
    this.startTitleAnimation();
  }

  startTitleAnimation() {
    setInterval(() => {
      this.animate = false;
      setTimeout(() => {
        this.currentTitle = this.titles[this.titleIndex];
        this.animate = true;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      }, 100); // short delay to reset the animation
    }, 2000); // delay for each title
  }
}
