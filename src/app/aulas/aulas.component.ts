import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aulas',
  standalone: true,
  imports: [RouterModule],  // Import RouterModule to use 'router-outlet'
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent {}

