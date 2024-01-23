import { Component } from '@angular/core';
import { Claim } from '../models/claim.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'claim-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-list.component.html',
  styleUrl: './claim-list.component.scss',
})
export class ClaimListComponent {
  claimsList: Claim[] = [
    {
      id: '123',
      claimerName: 'Marco Romero',
      email: 'mar.romero@mail.com',
      dismissalReason: 'Untimely dismissal',
    },
    {
      id: '145',
      claimerName: 'Mariana Romero',
      email: 'marianita.romero@mail.com',
      dismissalReason: 'Breach of contract',
    },
  ];
}
