import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMultiplication } from './table-multiplication';

describe('TableMultiplication', () => {
  let component: TableMultiplication;
  let fixture: ComponentFixture<TableMultiplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableMultiplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMultiplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
