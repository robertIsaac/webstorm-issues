import {Component, Input, input} from '@angular/core';

export type Nullable<T> = T | null | undefined;
export type InfoLabelColor = 1 | 2 | 3;

@Component({
  selector: 'app-foo',
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css'
})
export class FooComponent {
  color = input<Nullable<InfoLabelColor>>();
}
