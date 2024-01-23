import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClaimFormComponent } from './claim-form/claim-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClaimFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testApp';
}
