import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletformComponent } from './templetform.component';

describe('TempletformComponent', () => {
  let component: TempletformComponent;
  let fixture: ComponentFixture<TempletformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
