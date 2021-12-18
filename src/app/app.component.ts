import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  form = new FormGroup({
    mode: new FormControl(null),
    condition: new FormControl(null),
  })
}
