import { Component } from '@angular/core';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'sae-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    animations: fuseAnimations
})
export class WelcomeComponent {
    constructor(
        private fuseConfig: FuseConfigService
    ) {

    }
}
