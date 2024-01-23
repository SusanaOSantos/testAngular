import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'claim-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './claim-form.component.html',
  styleUrl: './claim-form.component.scss',
})
export class ClaimFormComponent {
  claimsForm = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.minLength(5), 
      Validators.maxLength(100), 
      Validators.pattern(/^[a-zA-Z\s]*$/)]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
      Validators.email,
    ]),
    reason: new FormControl('', [Validators.required]),
  });
  dismissalReasonsList = ['Untimely dismissal', 'Discrimimation', 'Violate medical or family leave', 'Breach of contract'];

  submitClaim() {
    console.log('name:', this.claimsForm.value.name ?? '');
    console.log('email:', this.claimsForm.value.email ?? '');
    console.log('reason:', this.claimsForm.value.reason ?? '');
  }
}
