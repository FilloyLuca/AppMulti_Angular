import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTableMult } from './page-table-mult';

describe('PageTableMult', () => {
  let component: PageTableMult;
  let fixture: ComponentFixture<PageTableMult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageTableMult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTableMult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
