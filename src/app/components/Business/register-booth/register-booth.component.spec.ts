import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBoothComponent } from './register-booth.component';

describe('RegisterBoothComponent', () => {
  let component: RegisterBoothComponent;
  let fixture: ComponentFixture<RegisterBoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBoothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
