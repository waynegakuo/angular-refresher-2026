import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-child-2',
  imports: [FormsModule],
  templateUrl: './child-2.html',
  styleUrl: './child-2.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child2 {
  title = input<string>('');
  newTitle: string = '';

  valueChanged = output<string>();

  updateTitle() {
    this.valueChanged.emit(this.newTitle);
  }
}
