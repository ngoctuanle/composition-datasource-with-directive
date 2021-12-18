import { Directive, Input, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export class BaseControlValueAccessor implements ControlValueAccessor {

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective?: FormControlDirective;
  @Input()
  formControl?: FormControl;
  @Input()
  formControlName?: string;

  get control(): FormControl {
    return (
      this.formControl ||
      this.controlContainer.control?.get(this.formControlName as string) as FormControl
    );
  }

  protected constructor(
    protected controlContainer: ControlContainer
  ) {}

  registerOnChange(fn: any): void {
    if (this.formControlDirective && this.formControlDirective.valueAccessor) {
      this.formControlDirective.valueAccessor.registerOnChange(fn);
    }
  }

  registerOnTouched(fn: any): void {
    if (this.formControlDirective && this.formControlDirective.valueAccessor) {
      this.formControlDirective.valueAccessor.registerOnTouched(fn);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.formControlDirective
      && this.formControlDirective.valueAccessor
      && this.formControlDirective.valueAccessor.setDisabledState
    ) {
      this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
    }
  }

  writeValue(obj: any): void {
    if (this.formControlDirective && this.formControlDirective.valueAccessor){
      this.formControlDirective.valueAccessor.writeValue(obj);
    }
  }

}
