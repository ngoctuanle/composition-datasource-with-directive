import { Component, Input, Optional } from '@angular/core';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-auto-complete-control',
  templateUrl: './auto-complete-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AutoCompleteControlComponent,
      multi: true,
    }
  ],
})
export class AutoCompleteControlComponent extends BaseControlValueAccessor {
  @Input() placeholder = '';

  constructor(
    @Optional() controlContainer: ControlContainer,
  ) {
    super(controlContainer);
  }
}
