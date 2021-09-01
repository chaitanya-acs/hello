import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineersListComponent } from './engineers-list.component';

describe('EngineersListComponent', () => {
  let component: EngineersListComponent;
  let fixture: ComponentFixture<EngineersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
