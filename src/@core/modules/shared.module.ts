import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CookieService } from 'ngx-cookie-service';
import { TranslateModule } from '@ngx-translate/core';
import { FuseConfirmDialogModule, FuseMaterialColorPickerModule } from '@fuse/components';


@NgModule({
    declarations: [
    ],
    imports: [
        MaterialModule,
        ColorPickerModule,
        FuseConfirmDialogModule,
        FuseMaterialColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule
    ],
    exports: [
        MaterialModule,
        ColorPickerModule,
        FuseConfirmDialogModule,
        FuseMaterialColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule,
        TranslateModule
    ],
    providers: [
        CookieService,
    ]
})

export class SaeSharedModule {

}
