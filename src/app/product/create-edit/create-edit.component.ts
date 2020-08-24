import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditProductComponent implements OnInit {

  formCreated: FormGroup;
  sttAdd: boolean = true;
  id: string;

  constructor(private fb: FormBuilder, private service: ServiceService) { }

  ngOnInit() {
    var url = window.location.href;
    this.id = this.getParameterByName('id', url);
    if (this.id !== null || this.id !== undefined) {
      this.service.detail(this.id).subscribe(data => {
        var obj = [];
        obj['name'] = data['name'];
        obj['breedName'] = data['name'];
        obj['color'] = data['color'];
        this.formCreated = this.fb.group(obj);
        this.sttAdd = false;
      });
    }
    this.createForm();
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  createForm() {
    const obj = [];
    obj['name'] = new FormControl('');
    obj['breedName'] = new FormControl('');
    obj['color'] = new FormControl('');
    this.formCreated = this.fb.group(obj);
  }

  addProduct() {
    const data = {
      id: '',
      name: this.formCreated.value.name,
      birthday: '2020-01-02',
      breedName: this.formCreated.value.breedName,
      gender: 1,
      color: this.formCreated.value.color,
      status: 1,
    }
    if (!this.sttAdd) {
      this.service.update(data, this.id).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
      alert("Update Succesfully");
      return window.location.href = '/product';
    }
    this.service.add(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    alert("Succesfully");
    return window.location.reload();
  }
}
