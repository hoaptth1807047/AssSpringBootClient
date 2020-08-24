import { Component, OnInit } from '@angular/core';
import { Dog } from '../../model/dog';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // dog: Dog = new Dog();
  // listDog: Dog[];
  listDog: any = [];

  constructor(private http: HttpClient, private service: ServiceService) {

  }

  ngOnInit() {
    this.getDataClient();
  }

  getDataClient() {
    this.service.load().subscribe(data => {
      this.listDog = data;
    });
  }

  delete(id) {
    var confirmed = confirm('Delete this product?');
    if (confirmed) {
      this.service.delete(id).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
      alert("Delete Succesfully!");
      return window.location.href = '/product';
    }
  }
}
