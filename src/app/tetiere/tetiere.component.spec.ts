import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetiereComponent } from './tetiere.component';

describe('TetiereComponent', () => {
  let component: TetiereComponent;
  let fixture: ComponentFixture<TetiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
