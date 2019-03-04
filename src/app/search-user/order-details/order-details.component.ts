import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderData: any;
  startDate: any;
  endDate: any;
  numberOfDays: number;
  numberOfOrders: number;
  totalCharge: number = 0;

  constructor(private activatedRoute: ActivatedRoute) { 
    // console.log(this.orderData.length);
    this.startDate  = this.activatedRoute.snapshot.params.startDate;
    this.endDate  = this.activatedRoute.snapshot.params.endDate;
    this.orderData = this.activatedRoute.snapshot.data.order;
    if(this.orderData !== undefined && this.orderData !== null)
      this.numberOfOrders = this.orderData.length;
    for(let i in this.orderData){
      this.totalCharge = this.totalCharge + Number(this.orderData[i].charge_customer.total_price);
    }
    this.dateDifference();
  }
  dateDifference(){
    let dt1 = new Date(this.startDate);
    let dt2 = new Date(this.endDate);
    this.numberOfDays = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24))
  }
  ngOnInit() {
  }

}
