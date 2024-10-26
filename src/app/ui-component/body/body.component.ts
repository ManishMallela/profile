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
}
