import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuShellComponent } from './menu-shell.component';

describe('MenuShellComponent', () => {
  let component: MenuShellComponent;
  let fixture: ComponentFixture<MenuShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
