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
  claim: any;

  constructor(
    private claimService: ClaimService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const claimId = params['id'];
      this.getClaimById(claimId);
    });
  }

  getClaimById(claimId: string) {
    this.claimService.getClaimById(claimId).subscribe((claim) => {
      this.claim = claim;
    });
  }

  editClaim(formData: any) {
    this.claimService.editClaim(formData).subscribe();
  }
}
