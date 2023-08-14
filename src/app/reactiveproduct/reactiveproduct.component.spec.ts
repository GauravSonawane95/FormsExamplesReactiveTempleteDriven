import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveproductComponent } from './reactiveproduct.component';

describe('ReactiveproductComponent', () => {
  let component: ReactiveproductComponent;
  let fixture: ComponentFixture<ReactiveproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
