import { Component } from '@angular/core';
import { CreateClaimComponent } from '../create-claim/create-claim.component';
import { ClaimListComponent } from '../../molecules/claim-list/claim-list.component';

@Component({
  selector: 'app-manage-claims',
  standalone: true,
  imports: [CreateClaimComponent, ClaimListComponent],
  templateUrl: './manage-claims.component.html',
  styleUrl: './manage-claims.component.scss',
})
export class ManageClaimsComponent {}
