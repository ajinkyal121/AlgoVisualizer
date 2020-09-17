import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathFindingComponent } from './path-finding.component';

describe('PathFindingComponent', () => {
  let component: PathFindingComponent;
  let fixture: ComponentFixture<PathFindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathFindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathFindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
