import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControl } from '../../interfaces/control.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  field: IControl;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
