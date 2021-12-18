import { Component, Inject, Input, Optional } from '@angular/core';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Option, SelectDirective } from './directives/types';
import { SELECT_DIRECTIVE } from './directives/constants';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectControlComponent,
      multi: true,
    }
  ],
})
export class SelectControlComponent extends BaseControlValueAccessor {
  @Input() placeholder = '';

  options$: Observable<Option[]> = of([]);

  constructor(
    @Optional() controlContainer: ControlContainer,
    @Optional() @Inject(SELECT_DIRECTIVE) private directive: SelectDirective,
  ) {
    super(controlContainer);
    this.options$ = directive ? directive.options$ : of([]);
  }
}
