import {AbstractControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class MatchPassword implements Validators {
  validate(control: AbstractControl): ValidationErrors | null {
    const { password, passwordConfirmation } = control.value;

    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
