import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Option } from '../select-control/directives/types';

@Injectable({
  providedIn: 'root'
})
export class RefService {

  getConditions(): Observable<Option[]> {
    return of([
      { label: 'Good', value: 'good' },
      { label: 'Normal', value: 'normal' }
    ])
  }
}
