import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { CreateClaimComponent } from './create-claim/create-claim.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClaimFormComponent, ClaimListComponent, CreateClaimComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testApp';
}
