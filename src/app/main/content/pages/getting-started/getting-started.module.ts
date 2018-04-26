import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { SaeSharedModule } from '@core/modules/shared.module';
import { GettingStartedComponent } from './getting-started.component';


const routes = [
  {
    path: 'getting-started',
    component: GettingStartedComponent
  }
];

@NgModule({
  declarations: [
    GettingStartedComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    FuseSharedModule,
    SaeSharedModule
  ]
})
export class GettingStartedModule {
}
