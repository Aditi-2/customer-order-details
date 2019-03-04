import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export const API_PARAMS_MAP = {
  permissions: 'capability',
  districtId: 'saId'
};

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) { }
  
  getData(){
    return this.http.get('https://private-anon-7e3e4b91ea-byrd1.apiary-mock.com/customers');
  }
  getCustomerDetails(customerId, startDate, endDate){
   return this.http.get(`https://private-anon-7e3e4b91ea-byrd1.apiary-mock.com/orders/${customerId}?start_date=${startDate}&end_date=${endDate}`)
  }
  
}
