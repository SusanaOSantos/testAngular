import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClaimFormComponent } from '../claim-form/claim-form.component';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'create-claim',
  standalone: true,
  imports: [CommonModule, ClaimFormComponent],
  templateUrl: './create-claim.component.html',
  styleUrl: './create-claim.component.scss',
})
export class CreateClaimComponent {
  constructor(private claimService: ClaimService) {}

  submitClaim(formData: any) {
    this.claimService.createClaim(formData).subscribe();
  }
}
