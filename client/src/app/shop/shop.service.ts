import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURL = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IPagination>(this.baseURL + 'products?pageSize=50');
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseURL + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseURL + 'products/types');
  }

}
