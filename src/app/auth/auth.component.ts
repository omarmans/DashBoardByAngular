import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form!: FormGroup;
  On_Show_Spinner = false;
  errMessage = '';
  is_loged_in = true;

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      age: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: [''],
    });
  }

  // #####################
  onSwitchMode() {
    this.is_loged_in = !this.is_loged_in;
  }
  // ##############
  onSubmit() {
    // if (this.form.valid) {
    // if (this.form.get('email')?.valid && this.form.get('password')?.valid) {
    if (
      this.isEmailValid(this.form.get('email')?.value) &&
      this.form.get('password')?.value
    ) {
      this.On_Show_Spinner = true;
      const { name, age, email, password, gender } = this.form.value;
      let AuthObs: Observable<AuthResponseData>;

      if (this.is_loged_in) {
        AuthObs = this.AuthService.logIn(email, password);
      } else {
        AuthObs = this.AuthService.SignUp(email, password);
      }

      AuthObs.subscribe(
        (resData: any) => {
          console.log(resData);
          this.On_Show_Spinner = false;
          this.router.navigate(['/dashboard']);
        },
        (errorMessage: any) => {
          console.log(errorMessage);
          this.errMessage = errorMessage;
          this.On_Show_Spinner = false;
        }
      );
      this.form.reset();
    }
  }
  // Function to check if email is valid

  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Function to check if password is valid
  // isPasswordValid(password: string): boolean {
  //   return password.trim().length > 0;
  // }
}
