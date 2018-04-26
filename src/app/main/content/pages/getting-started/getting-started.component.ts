import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sae-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  images = {
    model: {
      label: 'Model',
      url: 'assets/images/getting-started/create-model.png'
    },
    gp: {
      label: 'Gene Product',
      url: 'assets/images/getting-started/gp.png'
    },
    fd: {
      label: 'Functional Description',
      url: 'assets/images/getting-started/fd.png'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
