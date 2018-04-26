import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { SaeSharedModule } from '@core/modules/shared.module';

import { FuseAcademyCoursesComponent } from './courses/courses.component';
import { FuseAcademyCourseComponent } from './course/course.component';
import { AcademyCoursesService } from './courses.service';
import { AcademyCourseService } from './course.service';

const routes = [
    {
        path: 'tutorials',
        component: FuseAcademyCoursesComponent,
        resolve: {
            academy: AcademyCoursesService
        }
    },
    {
        path: 'tutorials/:courseId/:courseSlug',
        component: FuseAcademyCourseComponent,
        resolve: {
            academy: AcademyCourseService
        }
    }
];

@NgModule({
    declarations: [
        FuseAcademyCoursesComponent,
        FuseAcademyCourseComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        FuseSharedModule,
        SaeSharedModule
    ],
    providers: [
        AcademyCoursesService,
        AcademyCourseService
    ]
})
export class FuseAcademyModule {
}
