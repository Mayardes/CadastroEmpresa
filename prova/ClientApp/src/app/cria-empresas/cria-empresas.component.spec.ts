import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CriaEmpresasComponent } from './cria-empresas.component';

describe('CriaEmpresasComponent', () => {
  let component: CriaEmpresasComponent;
  let fixture: ComponentFixture<CriaEmpresasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
