import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpgComponent } from './mainpg.component';

describe('MainpgComponent', () => {
  let component: MainpgComponent;
  let fixture: ComponentFixture<MainpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
