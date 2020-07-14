import { Injectable } from '@angular/core';

import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: Http) { }



getStocksAPI(): Observable<any>{
	return this.http.get("http://localhost:3000/dashboard")
	        .map( (res: Response) => res.json())
	        .catch((error:any) => Observable.throw(error.json || 'Server error'));

}
  getStocks()  {
        return ['apple','google','ibm'];
    }
}
