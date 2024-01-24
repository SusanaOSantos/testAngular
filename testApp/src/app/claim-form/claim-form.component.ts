import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Claim } from '../models/claim.model';

@Component({
  selector: 'claim-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './claim-form.component.html',
  styleUrl: './claim-form.component.scss',
})
export class ClaimFormComponent {
  @Input() title: string = '';
  @Input() isCreate: boolean = true;
  @Input() claim: Claim = {
    id: '',
    claimerName: '',
    dismissalReason: '',
    email: ''
  };

  @Output() formSubmit = new EventEmitter<any>();
  claimsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.claimsForm = this.fb.group({
      name: new FormControl(this.claim?.claimerName ?? '', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
        Validators.pattern(/^[a-zA-Z\s]*$/),
      ]),
      email: new FormControl(this.claim?.email ?? '', [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
      ]),
      reason: new FormControl(this.claim?.dismissalReason ?? '', [
        Validators.required,
      ]),
    });
  }

  dismissalReasonsList = [
    'Untimely dismissal',
    'Discrimimation',
    'Violate medical or family leave',
    'Breach of contract',
  ];

  onSubmit() {
    this.formSubmit.emit({
      id: this.claim?.id ?? '',
      claimerName: this.claimsForm.value.name,
      email: this.claimsForm.value.email,
      dismissalReason: this.claimsForm.value.reason,
    });
  }
}
