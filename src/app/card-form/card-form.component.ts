import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataFormControl } from '../data-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10) ]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    expiration: new DataFormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  });
  constructor() {
    console.log(this.cardForm.get('name'));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.cardForm.value);

  }

  onReset() {
    this.cardForm.reset();
  }

}
