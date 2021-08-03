import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
} from '@angular/forms';
import {Observable, of, pipe} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;

    return this.authService.usernameAvailable(value)
      .pipe(
        map((value) => null),
        catchError((err) => {
          if(err.error.username){
           return of({ nonUniqueUsername: true })
          }else{
            return of({noConnection: true})
          }
        })
      );
  };
}
