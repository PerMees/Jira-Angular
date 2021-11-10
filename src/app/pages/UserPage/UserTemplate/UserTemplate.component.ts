import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-template',
  template: `
    <div class="user-template">
      <div class="user-template-content">
        <i
          class="user-template-control"
          nz-icon
          nzType="close"
          nzTheme="outline"
          routerLink=""
        ></i>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./UserTemplate.css'],
})
export class UserTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
