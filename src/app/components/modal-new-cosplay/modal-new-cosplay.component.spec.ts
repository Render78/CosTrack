import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewCosplayComponent } from './modal-new-cosplay.component';

describe('ModalNewCosplayComponent', () => {
  let component: ModalNewCosplayComponent;
  let fixture: ComponentFixture<ModalNewCosplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNewCosplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewCosplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
