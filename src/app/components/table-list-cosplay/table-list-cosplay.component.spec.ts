import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListCosplayComponent } from './table-list-cosplay.component';

describe('TableListCosplayComponent', () => {
  let component: TableListCosplayComponent;
  let fixture: ComponentFixture<TableListCosplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableListCosplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableListCosplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
