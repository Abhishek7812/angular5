
import {Routes,RouterModule} from '@angular/router';
 
import {StocksComponent} from './stocks.component';

const appRoutes: Routes = [{
    path:'stocks',
    component: StocksComponent

}];

export const routing :  = RouterModule.forRoot(appRoutes);
