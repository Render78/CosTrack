import { Component } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card.component';
import { ModalNewCosplayComponent } from "../modal-new-cosplay/modal-new-cosplay.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StatCardComponent, ModalNewCosplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
