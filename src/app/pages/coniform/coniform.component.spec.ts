import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConiformComponent } from './coniform.component';

describe('ConiformComponent', () => {
  let component: ConiformComponent;
  let fixture: ComponentFixture<ConiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConiformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
