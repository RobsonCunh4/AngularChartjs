import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeListarComponent } from './cidade-listar.component';

describe('CidadeListarComponent', () => {
  let component: CidadeListarComponent;
  let fixture: ComponentFixture<CidadeListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
