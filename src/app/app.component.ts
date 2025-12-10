import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cosplay-organizer';
  // Signals para el estado visual
  collapsed = signal(false);
  selectedItemId = signal(1);

  // Métodos
  toggleSidebar() {
    this.collapsed.update(value => !value);
  }

  selectItem(id: number) {
    this.selectedItemId.set(id);
  }

  // Helpers para obtener el título (como ya no hay array, hacemos un switch simple)
  getActiveLabel() {
    switch (this.selectedItemId()) {
      case 1: return 'Dashboard';
      case 2: return 'Mis Cosplays';
      case 3: return 'Inventario';
      case 4: return 'Calendario';
      case 5: return 'Presupuesto';
      case 6: return 'Inspiración';
      default: return 'App';
    }
  }
}
