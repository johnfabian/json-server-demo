import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.configService.productsUrl);
  }

  getById(id: number): Observable<Product> {
    const url = `${this.configService.productsUrl}/${id}`;
    return this.httpClient.get<Product>(url);
  }

  

}
