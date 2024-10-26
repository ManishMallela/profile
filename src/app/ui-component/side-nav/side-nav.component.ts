import {
  animate,
  sequence,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, inject } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('increaseSpacing', [
      transition('* => *', [
        sequence([
          animate('1s ease-in', style({ letterSpacing: '10px' })), // Adjust the pixel value as needed
          animate('1s ease-out', style({ letterSpacing: '0px' })),
        ]),
      ]),
    ]),
  ],
})
export class SideNavComponent {
  mobileQuery: MediaQueryList;

  words = ['Manish', 'Mallela'];
  animationState = false;

  startAnimationLoop() {
    setInterval(() => {
      this.animationState = !this.animationState; // Toggle the animation state
    }, 4000); // Adjust interval to match the total animation duration
  }

  constructor() {
    this.startAnimationLoop();
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: (() => void) | undefined;

  fillerNav = [];

  // ngOnDestroy(): void {
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );
}
