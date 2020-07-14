import { Component, OnInit } from '@angular/core';
import { StocksService} from '../stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private stocksService:StocksService) { }

  ngOnInit(): void {
  }

  getAllItem(){
  	this.stocksService.getStocksAPI()
  		.subscribe(
          data => console.log(JSON.stringify(data)) ,
          error =>console.log('Server Error')
  		);

  }

}
