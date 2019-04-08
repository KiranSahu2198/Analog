import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [
  MatButtonModule,
  BrowserAnimationsModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
