import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDomainComponent } from './change-domain.component';

describe('ChangeDomainComponent', () => {
  let component: ChangeDomainComponent;
  let fixture: ComponentFixture<ChangeDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
