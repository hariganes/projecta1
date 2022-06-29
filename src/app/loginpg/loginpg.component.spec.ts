import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpgComponent } from './loginpg.component';

describe('LoginpgComponent', () => {
  let component: LoginpgComponent;
  let fixture: ComponentFixture<LoginpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
