import { Directive } from '@angular/core';
import { SELECT_DIRECTIVE } from './constants';
import { Option, SelectDirective } from './types';
import { Observable } from 'rxjs';
import { RefService } from '../../services/ref.service';

@Directive({
  selector: 'app-select-control[appConditionDataSource]',
  providers: [
    {
      provide: SELECT_DIRECTIVE,
      useExisting: ConditionDataSourceDirective,
    },
  ],
})
export class ConditionDataSourceDirective implements SelectDirective {
  constructor(
    private ref: RefService
  ) {
  }

  options$: Observable<Option[]> = this.ref.getConditions();
}
