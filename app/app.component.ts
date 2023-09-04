import { OnChanges } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroupDirective, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  formDetails!: FormGroup;
  form1: FormGroup;
  form2: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formDetails = this.fb.group({});
  }
  ngOnChanges() {}
}
