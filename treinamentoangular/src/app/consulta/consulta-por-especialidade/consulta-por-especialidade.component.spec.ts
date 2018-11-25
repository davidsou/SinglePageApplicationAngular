import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPorEspecialidadeComponent } from './consulta-por-especialidade.component';

describe('ConsultaPorEspecialidadeComponent', () => {
  let component: ConsultaPorEspecialidadeComponent;
  let fixture: ComponentFixture<ConsultaPorEspecialidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPorEspecialidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPorEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
