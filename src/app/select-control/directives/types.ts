import { Observable } from 'rxjs';

export interface Option {
  value: string,
  label: string
}

export interface SelectDirective {
  options$: Observable<Option[]>;
}
