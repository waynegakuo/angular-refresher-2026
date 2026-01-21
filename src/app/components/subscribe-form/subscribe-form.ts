import {Component, effect, signal} from '@angular/core';
import {initialData, Subscription, subscriptionSchema} from '../../models/subscription.model';
import {form, FormField} from '@angular/forms/signals';
import {CautionMessageDirective} from '../../directives/caution-message.directive';

@Component({
  selector: 'app-subscribe-form',
  imports: [FormField, CautionMessageDirective],
  templateUrl: './subscribe-form.html',
  styleUrl: './subscribe-form.scss',
})
export class SubscribeForm {

  // Form model signal
  subscribeModel = signal<Subscription>(initialData);

  // Creates a form wrapped around the form signal
  // Each HTML form control must be associated with one field from our form
  subscribeForm = form(this.subscribeModel, subscriptionSchema);

  // When the signal value changes
  eff = effect(() => console.log('Email: ', this.subscribeModel().email));

  // Without the () - used to navigate the hierarchy, Bind to input elements
  // subForm: FieldTree for the entire form
  // subForm.email: FieldTree for the email field

  // With the () - provides reactive signals that track real-time state for display or creating derived state
  // subForm(): FieldState for the entire form
  // subForm().email(): FieldState for the email field


}
