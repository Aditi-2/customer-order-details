import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiRequestService } from '../service/api-request.service';

@Injectable()
export class UsersResolver implements Resolve<any> {
    public searchEndPoint: string = '/api/v1/institutions/';   
    public custId: string;
    public startDate: any;
    public endDate: any;

    constructor(
        private apiRequestService: ApiRequestService,
        private router: Router
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        this.custId = route.paramMap.get('custId');
        this.startDate = route.paramMap.get('startDate');
        this.endDate = route.paramMap.get('endDate');
        return this.apiRequestService
            .getCustomerDetails(this.custId, this.startDate, this.endDate).pipe(map(
                (response) => {
                        return response;
                    },
                    (errorResult: any) => {
                        console.log(errorResult);
                    }));
    }

   
}