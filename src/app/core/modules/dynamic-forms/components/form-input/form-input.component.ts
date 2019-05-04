import { Component, OnInit } from '@angular/core';
import { IControl } from '../../interfaces/control.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  field: IControl;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
