import { Routes } from '@angular/router';
import { EditClaimComponent } from './edit-claim/edit-claim.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'edit/:id',
        pathMatch: 'full',
        component: EditClaimComponent,
      },
    ],
  },
];
