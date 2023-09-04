import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  @Input() formGroupName!: string

  form!: FormGroup
  constructor(private rootFormGroup: FormGroupDirective, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      address1: [],
      address2: [],
    });
   
  }

}