import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClaimFormComponent } from '../claim-form/claim-form.component';
import { Claim } from '../models/claim.model';
import { ClaimService } from '../claim.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-claim',
  standalone: true,
  imports: [CommonModule, ClaimFormComponent],
  templateUrl: './edit-claim.component.html',
  styleUrl: './edit-claim.component.scss',
})
export class EditClaimComponent {
  claim: Claim = {
    id: '',
    claimerName: '',
    dismissalReason: '',
    email: ''
  };

  editClaim(formData: any) {
    console.log('Edit Form Submitted:', formData);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const claimId = params['id'];
      this.getClaimById(claimId)
      console.log('claim iss', this.claim)
    });
  }

  constructor(private claimService: ClaimService, public route: ActivatedRoute) { }

  getClaimById(claimId: string){
    this.claimService
       .getClaimById(claimId)
       .subscribe((claim) => (this.claim = claim));
  }
}
