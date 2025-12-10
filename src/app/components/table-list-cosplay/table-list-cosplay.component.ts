import { Component } from '@angular/core';
import { ModalNewCosplayComponent } from '../modal-new-cosplay/modal-new-cosplay.component';

@Component({
  selector: 'app-table-list-cosplay',
  standalone: true,
  imports: [ModalNewCosplayComponent],
  templateUrl: './table-list-cosplay.component.html',
  styleUrl: './table-list-cosplay.component.css'
})
export class TableListCosplayComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }
}
