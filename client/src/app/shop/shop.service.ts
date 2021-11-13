import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURL = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IPagination>(this.baseURL + 'products?pageSize=50');
  }
}
