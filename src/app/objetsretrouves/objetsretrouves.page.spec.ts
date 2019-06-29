import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetsretrouvesPage } from './objetsretrouves.page';

describe('ObjetsretrouvesPage', () => {
  let component: ObjetsretrouvesPage;
  let fixture: ComponentFixture<ObjetsretrouvesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetsretrouvesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetsretrouvesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
