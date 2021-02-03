import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products : Product[] = [];

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {

    this.productsService.getAll().subscribe((products : Product[])=>{
      this.products = [...products];

    });

  }

}
