import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothmapComponent } from './boothmap.component';

describe('BoothmapComponent', () => {
  let component: BoothmapComponent;
  let fixture: ComponentFixture<BoothmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoothmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoothmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
