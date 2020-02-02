import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefItalianComponent } from './chef-italian.component';

describe('ChefItalianComponent', () => {
  let component: ChefItalianComponent;
  let fixture: ComponentFixture<ChefItalianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefItalianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
