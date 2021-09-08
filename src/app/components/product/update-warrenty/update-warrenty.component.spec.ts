import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWarrentyComponent } from './update-warrenty.component';

describe('UpdateWarrentyComponent', () => {
  let component: UpdateWarrentyComponent;
  let fixture: ComponentFixture<UpdateWarrentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWarrentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWarrentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
