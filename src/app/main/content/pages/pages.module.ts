import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule } from '@angular/material';

import { WelcomeModule } from './welcome/welcome.module';
import { ComingSoonModule } from './coming-soon/coming-soon.module';
import { Error404Module } from './errors/404/error-404.module';
import { Error500Module } from './errors/500/error-500.module';
import { MaintenanceModule } from './maintenance/maintenence.module';
import { SearchModule } from './search/search.module';
import { FaqModule } from './faq/faq.module';
import { KnowledgeBaseModule } from './knowledge-base/knowledge-base.module';
import { FuseAcademyModule } from './academy/academy.module';
import { GettingStartedModule } from './getting-started/getting-started.module';

@NgModule({
    imports: [
        WelcomeModule,
        GettingStartedModule,
        ComingSoonModule,
        Error404Module,
        Error500Module,
        MaintenanceModule,
        SearchModule,
        FaqModule,
        KnowledgeBaseModule,
        FuseAcademyModule,
        // Material

    ],
    declarations: []
})
export class FusePagesModule {

}
