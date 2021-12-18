import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SelectControlComponent } from './select-control/select-control.component';
import { AutoCompleteControlComponent } from './auto-complete-control/auto-complete-control.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ModeDataSourceDirective } from './select-control/directives/mode-data-source.directive';
import { ConditionDataSourceDirective } from './select-control/directives/condition-data-source.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SelectControlComponent,
    AutoCompleteControlComponent,
    ModeDataSourceDirective,
    ConditionDataSourceDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzSelectModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
