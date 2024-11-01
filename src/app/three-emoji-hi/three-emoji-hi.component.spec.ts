import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeEmojiHiComponent } from './three-emoji-hi.component';

describe('ThreeEmojiHiComponent', () => {
  let component: ThreeEmojiHiComponent;
  let fixture: ComponentFixture<ThreeEmojiHiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeEmojiHiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeEmojiHiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
