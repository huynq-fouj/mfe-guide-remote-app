import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, CustomerRequestParams, CustomersResponse } from '../types';
import { Observable } from 'rxjs';
import { ApplicationConfigService } from './application-config.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private resourceUrl = this.applicationConfigService.getEndpointFor('api');

  constructor(
    private http: HttpClient,
    private applicationConfigService: ApplicationConfigService
  ) { }

  getCustomers(params: CustomerRequestParams): Observable<ApiResponse<CustomersResponse>> {
    let httpParams = new HttpParams()
      .set('page', params.page.toString())
      .set('size', params.size.toString())
      .set('isHiddenDefault', params.isHiddenDefault ?? false);

    return this.http.get<ApiResponse<CustomersResponse>>(
      `${this.resourceUrl}/client/page/customer/get-all-with-paging`, 
      { params: httpParams }
    );
  }
}
