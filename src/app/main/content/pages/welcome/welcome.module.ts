import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { SaeSharedModule } from '@core/modules/shared.module';
import { WelcomeComponent } from './welcome.component';


const routes = [
    {
        path: 'welcome',
        component: WelcomeComponent
    }
];

@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        FuseSharedModule,
        SaeSharedModule
    ]
})
export class WelcomeModule {
}
