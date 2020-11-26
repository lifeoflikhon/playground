import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import {DirectivesModule} from '../directives/directives.module';
import {SharedModule} from "../shared/shared.module";
import { SegmentComponent } from './segment/segment.component';


@NgModule({
    declarations: [ElementsHomeComponent, PlaceholderComponent, SegmentComponent],
    exports: [
        ElementsHomeComponent
    ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    DirectivesModule,
    SharedModule
  ]
})
export class ElementsModule { }
