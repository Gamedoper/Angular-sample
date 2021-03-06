import { Component, OnInit } from '@angular/core';

import {products} from '../products';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
  ) { }



  ngOnInit() {
    // First get the product id from the current route.
 


  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  this.product = products.find(product =>product.id === productIdFromRoute)

  }

}