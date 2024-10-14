import { Routes } from '@angular/router';
import { PaiComponent } from './pai/pai.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';

export const routes: Routes = [
    {
        path: 'pai',
        component: PaiComponent,
        children: [
            {
                path: 'primeiro',
                component: PrimeiroComponent,
            
            },
            {
                path: 'segundo',
                component: SegundoComponent,
            },
        ]
    },
];
