import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() title: string = '';

  updatedTitle: string = '';
  newTitle: string = '';

  valueChanged = output<string>();

  @Output() titleChange = new EventEmitter<string>();

  changeTitle() {
    this.titleChange.emit(this.updatedTitle);
  }

  updateTitle() {
    this.valueChanged.emit(this.newTitle);
  }
}
