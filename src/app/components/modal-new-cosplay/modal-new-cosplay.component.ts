import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-new-cosplay',
  standalone: true,
  imports: [],
  templateUrl: './modal-new-cosplay.component.html',
  styleUrl: './modal-new-cosplay.component.css'
})
export class ModalNewCosplayComponent {
  // Input para controlar la visibilidad desde el padre (para pruebas o lógica manual)
  @Input() isVisible = false;

  // Output para avisar al padre que se cerró
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }
}
