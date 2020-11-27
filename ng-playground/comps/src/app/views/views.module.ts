import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticesComponent } from './statistices/statistices.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
    declarations: [ViewsHomeComponent, StatisticesComponent],
    exports: [
        ViewsHomeComponent
    ],
    imports: [
        CommonModule,
        ViewsRoutingModule,
        SharedModule
    ]
})
export class ViewsModule { }
