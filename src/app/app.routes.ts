import { Routes } from '@angular/router';
import { SubscribeForm } from './components/subscribe-form/subscribe-form';

export const routes: Routes = [
  { path: '', redirectTo: 'signal-forms', pathMatch: 'full' },
  { path: 'signal-forms', component: SubscribeForm },
];
