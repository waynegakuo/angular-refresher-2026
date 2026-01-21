import { Routes } from '@angular/router';
import { SubscribeForm } from './components/subscribe-form/subscribe-form';
import {HttpResource} from './components/http-resource/http-resource';

export const routes: Routes = [
  { path: '', redirectTo: 'signal-forms', pathMatch: 'full' },
  { path: 'signal-forms', component: SubscribeForm, title: 'Angular Refresher | Signal Forms' },
  {path: 'http-resource', component: HttpResource, title: 'Angular Refresher | HTTP Resource'}
];
