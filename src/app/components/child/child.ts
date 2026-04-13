import { ChangeDetectionStrategy, Component, EventEmitter, input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child {
  title = input<string>('');

  updatedTitle: string = '';

  @Output() titleChange = new EventEmitter<string>();

  changeTitle() {
    this.titleChange.emit(this.updatedTitle);
  }
}
