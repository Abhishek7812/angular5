import {Component} from '@angular/core';
import { StockService } from './stock.service';

@Component({

    selector: 'stocks',
    template: `<h1>{{title}}</h1>

    <ul>
      <li *ngFor="let stock as stocks">
         {(stocks)}
      </li>
    </ul>`

})

export class StocksComponent {
  title = 'list os Stocks';
 // stocks = ['apple','ibm','google'];
  stocks;

  constructor(stockService : StockService){
      this.stocks = stockService.getStocks();
  }
}
