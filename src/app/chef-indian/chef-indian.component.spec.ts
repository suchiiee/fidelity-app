import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefIndianComponent } from './chef-indian.component';

describe('ChefIndianComponent', () => {
  let component: ChefIndianComponent;
  let fixture: ComponentFixture<ChefIndianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefIndianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefIndianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
