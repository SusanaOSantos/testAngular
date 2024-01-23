import { Component } from '@angular/core';
import { Claim } from '../models/claim.model';
import { CommonModule } from '@angular/common';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'claim-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-list.component.html',
  styleUrl: './claim-list.component.scss',
})
export class ClaimListComponent {
  claimsList: Claim[] = [];

  constructor(private claimService: ClaimService) {
    this.claimService.getClaims().then((claims: Claim[]) => {
      this.claimsList = claims;
    });
  }
}
