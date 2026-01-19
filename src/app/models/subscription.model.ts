import {email, min, max, minLength, required, schema} from '@angular/forms/signals';

export interface Subscription {
  email: string;
  firstName: string;
  lastName: string;
  yearsAsFan: number;
}

export const initialData: Subscription = {
  email: '',
  firstName: '',
  lastName: '',
  yearsAsFan: NaN,
}

// We add logic to our form using a schema in Signal Forms
// rootPath represents the root location in the form's field tree - they don't hold values but are addresses
export const subscriptionSchema = schema<Subscription>((rootPath) => {
  required(rootPath.email, {message: 'Email is required'});
  email(rootPath.email, {message: 'Email is invalid'});
  minLength(rootPath.email, 6, {message: 'Email must be at least 6 characters long'});
  min(rootPath.yearsAsFan, 0, {message: 'Years as fan must be greater than 0'});
  max(rootPath.yearsAsFan, 100, {message: 'Years as fan must be less than 100'})
});
