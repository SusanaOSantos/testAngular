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
  ) {}

  ngOnInit() {
    this.getsClaimsList();
    this.claimService.databaseSubject.pipe().subscribe(() => {
      this.getsClaimsList();
    });
  }

  deleteClaim(claimId: string) {
    this.claimService.removeClaimById(claimId).subscribe(() => {
      this.getsClaimsList();
    });
  }

  getsClaimsList() {
    this.claimService.getClaims().subscribe((claims: Claim[]) => {
      this.claimsList = claims;
    });
  }

  editClaim(claimId: string) {
    this.router.navigate(['/edit', claimId]);
  }
}
