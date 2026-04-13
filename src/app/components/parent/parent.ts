import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Child} from '../child/child';
import {Child2} from '../child-2/child-2';

@Component({
  selector: 'app-parent',
  imports: [
    Child,
    Child2
  ],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Parent {
  parentTitle: string = 'This is information from the parent component';

  parentTitleChanged(updatedTitle: string) {
    // const target = event.target as HTMLInputElement;
    this.parentTitle = updatedTitle;
  }
}
