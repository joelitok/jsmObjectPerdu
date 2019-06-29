import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetPerduPage } from './objet-perdu.page';

describe('ObjetPerduPage', () => {
  let component: ObjetPerduPage;
  let fixture: ComponentFixture<ObjetPerduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetPerduPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetPerduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
