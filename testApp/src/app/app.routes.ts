import { Routes } from '@angular/router';
import { ManageClaimsComponent } from './manage-claims/manage-claims.component';
import { EditClaimComponent } from './edit-claim/edit-claim.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ManageClaimsComponent,
      },
      {
        path: 'edit/:id',
       component: EditClaimComponent,
      }
    ],
  },
];
