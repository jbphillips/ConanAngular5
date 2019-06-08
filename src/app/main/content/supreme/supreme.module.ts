import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { FuseSupremeComponent } from './supreme.component';

const routes = [
    {
        path     : 'supreme',
        component: FuseSupremeComponent
    }
];

@NgModule({
    declarations: [
        FuseSupremeComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        FuseSupremeComponent
    ]
})

export class FuseSupremeModule
{
}
