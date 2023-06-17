import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaEditarComponent } from './pessoa-editar.component';

describe('PessoaEditarComponent', () => {
  let component: PessoaEditarComponent;
  let fixture: ComponentFixture<PessoaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaEditarComponent]
    });
    fixture = TestBed.createComponent(PessoaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
