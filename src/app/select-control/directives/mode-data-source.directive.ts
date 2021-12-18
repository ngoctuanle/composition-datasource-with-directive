import { Directive } from '@angular/core';
import { SELECT_DIRECTIVE } from './constants';
import { Option, SelectDirective } from './types';
import { Observable, of } from 'rxjs';

@Directive({
  selector: 'app-select-control[appModeDataSource]',
  providers: [
    {
      provide: SELECT_DIRECTIVE,
      useExisting: ModeDataSourceDirective,
    },
  ],
})
export class ModeDataSourceDirective implements SelectDirective {
  options$: Observable<Option[]> = of([
    { label: 'Auto', value: 'auto' },
    { label: 'Manual', value: 'manual' },
  ]);
}
