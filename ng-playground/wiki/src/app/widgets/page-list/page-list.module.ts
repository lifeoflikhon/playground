import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListRootComponent } from './page-list-root/page-list-root.component';



@NgModule({
    declarations: [PageListRootComponent],
    exports: [
        PageListRootComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PageListModule { }
