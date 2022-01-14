import { ProductModel } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // สร้างตัวแปรมารับค่าจาก API
  dataProduct:ProductModel;

  constructor(public api: ProductService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data:ProductModel) => {
      console.log(data);
      this.dataProduct = data;
    })
  }

}
