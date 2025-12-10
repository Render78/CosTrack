import { Routes } from '@angular/router';
import { TableListCosplayComponent } from './components/table-list-cosplay/table-list-cosplay.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cosplay/list',
        component: TableListCosplayComponent
    }
];
