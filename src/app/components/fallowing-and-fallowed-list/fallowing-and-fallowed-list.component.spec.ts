import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallowingAndFallowedListComponent } from './fallowing-and-fallowed-list.component';

describe('FallowingAndFallowedListComponent', () => {
  let component: FallowingAndFallowedListComponent;
  let fixture: ComponentFixture<FallowingAndFallowedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallowingAndFallowedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallowingAndFallowedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
