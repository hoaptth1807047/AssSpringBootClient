import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditProductComponent implements OnInit {

  formCreated: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const obj = [];
    obj['name'] = new FormControl('', [Validators.required]);
    obj['breedName'] = new FormControl('', [Validators.required]);
    obj['color'] = new FormControl('', [Validators.required]);
  }


}
