import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { WelcomeComponent } from './welcome.component';

const routes = [
    {
        path: 'welcome',
        component: WelcomeComponent
    }, {
        path: '**',
        redirectTo: 'welcome'
    }
];

@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        FuseSharedModule
    ]
})
export class WelcomeModule {
}
