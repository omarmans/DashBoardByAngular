import { HttpClient, HttpErrorResponse } from '@angular/common/http';
export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  exhaustMap,
  Subject,
  take,
  tap,
} from 'rxjs';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './NewUser.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Key = 'AIzaSyBBWmC8-NlOCMV0nUk7KMcC3KXnAwyJw7o';
  user = new BehaviorSubject<User | null>(null);
  // user = new Subject<User>();

  private ExTime: any;
  //we use it to confirm the hole prject with it

  constructor(private http: HttpClient, private Router: Router) {}
  private HandlingAuthnticaton(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const ExpirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user_Created = new User(email, userId, token, ExpirationDate);
    this.user.next(user_Created);
    this.auto_log_out(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user_Created));
  }

  //Handling the errors
  private ErrorHandling(errorRes: HttpErrorResponse) {
    console.error('Error Response:', errorRes);

    let errormessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errormessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errormessage =
          'There is no user record corresponding to this identifier. The user may have been deleted.';
        break;
      case 'INVALID_PASSWORD':
        errormessage =
          'The password is invalid or the user does not have a password.';
        break;
      case 'USER_DISABLED':
        errormessage =
          'The user account has been disabled by an administrator.';
        break;
      case 'EMAIL_EXISTS':
        errormessage =
          'The email address is already in use by another account.';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errormessage = 'Password sign-in is disabled for this project.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errormessage =
          'We have blocked all requests from this device due to unusual activity. Try again later.';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errormessage =
          'Invalid login credentials. Please check your email and password.';
        break;
      default:
        errormessage = 'An unknown error occurred!';
    }

    return throwError(errormessage);
  }

  //signup func

  SignUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBWmC8-NlOCMV0nUk7KMcC3KXnAwyJw7o',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.ErrorHandling),
        tap((resData) => {
          this.HandlingAuthnticaton(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }
  //signup login
  logIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBWmC8-NlOCMV0nUk7KMcC3KXnAwyJw7o',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.ErrorHandling),
        tap((resData) => {
          this.HandlingAuthnticaton(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  //log-out func
  log_out() {
    this.user.next(null);
    localStorage.removeItem('userData');
    this.Router.navigate(['/']);
    if (this.ExTime) {
      clearTimeout(this.ExTime);
    }
  }
  //  auto_login func
  auto_login() {
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
      return;
    }

    const userData = JSON.parse(userDataString) as {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    };

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    // Check if the loaded user's token is still valid
    if (loadedUser.token) {
      this.user.next(loadedUser);
      let EX_DU =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.auto_log_out(EX_DU);
    }
  }
  //  auto_logout func
  auto_log_out(EX_D_Time: number) {
    this.ExTime = setTimeout(() => {
      this.log_out();
    }, EX_D_Time);
  }
}
