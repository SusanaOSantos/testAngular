import { Routes } from '@angular/router';
import { ManageClaimsComponent } from './components/features/manage-claims/manage-claims.component';
import { EditClaimComponent } from './components/features/edit-claim/edit-claim.component';

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
      },
    ],
  },
];
