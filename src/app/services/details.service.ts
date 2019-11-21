import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DetailsModel } from '../models/details.model';

@Injectable()
export class DetailsService {
  details: DetailsModel[] = [];
  baseUrl = 'http://127.0.0.1:5000/';
  constructor(private http: Http) { }

  getAllData() {
    return this.http.get(this.baseUrl);
  }

  addDetails(detail: DetailsModel) {
    this.details.push(detail);
  }

  getAllDetails() {
    return this.details;
  }
}
