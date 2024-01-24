import { Component } from '@angular/core';
import { Claim } from '../models/claim.model';
import { CommonModule } from '@angular/common';
import { ClaimService } from '../claim.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'claim-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-list.component.html',
  styleUrl: './claim-list.component.scss',
})
export class ClaimListComponent {
  claimsList: Claim[] = [];

  constructor(
    private claimService: ClaimService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.getsClaimsList();
  }
  

  deleteClaim(claimId: string) {
    this.claimService.removeUserById(claimId).subscribe(() => {
      this.getsClaimsList();
    });
  }

  getsClaimsList() {
    this.claimService.getClaims().then((claims: Claim[]) => {
      this.claimsList = claims;
    });
  }

  editClaim(claimId: string) {
    console.log('claimId on click edit', claimId);
    this.router.navigate(['/edit', claimId]);
  }
}
