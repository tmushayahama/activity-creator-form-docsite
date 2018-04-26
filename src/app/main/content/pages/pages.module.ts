import { NgModule } from '@angular/core';

import { WelcomeModule } from "./welcome/welcome.module";
import { ComingSoonModule } from './coming-soon/coming-soon.module';
import { Error404Module } from './errors/404/error-404.module';
import { Error500Module } from './errors/500/error-500.module';
import { MaintenanceModule } from './maintenance/maintenence.module';
import { SearchModule } from './search/search.module';
import { FaqModule } from './faq/faq.module';
import { KnowledgeBaseModule } from './knowledge-base/knowledge-base.module';
import { FuseAcademyModule } from './academy/academy.module';

@NgModule({
    imports: [
        WelcomeModule,
        ComingSoonModule,
        Error404Module,
        Error500Module,
        MaintenanceModule,
        SearchModule,
        FaqModule,
        KnowledgeBaseModule,
        FuseAcademyModule
    ]
})
export class FusePagesModule {

}
