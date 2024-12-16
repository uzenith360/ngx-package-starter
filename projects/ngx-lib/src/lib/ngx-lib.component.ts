import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-ngx-lib',
    template: `
    <p>
      ngx-lib works!
    </p>
  `,
    styles: [],
    standalone: false
})
export class NgxLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
