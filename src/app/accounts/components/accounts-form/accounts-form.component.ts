import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts-form',
  templateUrl: './accounts-form.component.html',
  styleUrls: ['./accounts-form.component.scss']
})
export class AccountsFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    plan: new FormControl('', Validators.required),
    enterprise: new FormControl(false)
  });

  status$: Observable<string>;

  constructor(
    private accounts: AccountService
  ) { }

  ngOnInit() {
    this.status$ = this.accounts.formStatus$;
  }

  isInvalid(name: string) {
    return this.form.controls[name].invalid
      && (this.form.controls[name].dirty || this.form.controls[name].touched);
  }

  async submit() {
    this.form.disable();
    await this.accounts.create({
      ...this.form.value
    });
    this.form.reset();
    this.form.enable();
  }

}
