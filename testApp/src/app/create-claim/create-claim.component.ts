import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClaimFormComponent } from '../claim-form/claim-form.component';

@Component({
  selector: 'create-claim',
  standalone: true,
  imports: [CommonModule, ClaimFormComponent],
  templateUrl: './create-claim.component.html',
  styleUrl: './create-claim.component.scss',
})
export class CreateClaimComponent {

  submitClaim(formData: any) {
    console.log('Create Form Submitted:', formData);
  }
}
