import { DashboardsComponent } from './dashboard.component';
import { Component, OnInit } from '@angular/core';
import { StocksService} from '../stocks.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
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
