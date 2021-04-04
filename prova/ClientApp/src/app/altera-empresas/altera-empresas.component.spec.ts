import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraEmpresasComponent } from './altera-empresas.component';

describe('AlteraEmpresasComponent', () => {
  let component: AlteraEmpresasComponent;
  let fixture: ComponentFixture<AlteraEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
