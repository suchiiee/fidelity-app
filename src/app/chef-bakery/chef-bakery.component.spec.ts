import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefBakeryComponent } from './chef-bakery.component';

describe('ChefBakeryComponent', () => {
  let component: ChefBakeryComponent;
  let fixture: ComponentFixture<ChefBakeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefBakeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
