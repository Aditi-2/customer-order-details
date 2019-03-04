import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiRequestService } from '../service/api-request.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  users: any = [];
  events: string[] = [];
  customerDataGroup: any;
  customerName: any;
  datepicker: any;
  userDetails: any = [];

  constructor(private router: Router, private apiRequest: ApiRequestService,private formBuilder: FormBuilder) {
    this.customerDataGroup = this.formBuilder.group({
      customerName: new FormControl(this.users.name, [Validators.required]),
      date: new FormControl(this.datepicker, [Validators.required])
  });
   }
  
  getDetails(details){
    this.router.navigate([`/order/${details.value.customerName}/${details.value.date.startDate._d}/${details.value.date.endDate._d}`]);
  }
  ngOnInit() {
    this.apiRequest.getData().subscribe(data => {
      this.users =  data;
    })
  }

}
