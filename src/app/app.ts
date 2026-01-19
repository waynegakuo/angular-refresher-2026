import { Component, signal } from '@angular/core';
import {SubscribeForm} from './components/subscribe-form/subscribe-form';

@Component({
  selector: 'app-root',
  imports: [SubscribeForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-refresher-2026');
}
