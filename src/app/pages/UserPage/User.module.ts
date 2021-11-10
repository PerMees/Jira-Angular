import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './RegisterPage/Register.component';
import { LoginComponent } from './LoginPage/Login.component';
import { UserTemplateComponent } from './UserTemplate/UserTemplate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AntdModule } from 'src/app/_core/Shared/AntdModule/Antd.module';

const routes: Routes = [
  {
    path: '',
    component: UserTemplateComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    AntdModule,
  ],
  exports: [],
  declarations: [UserTemplateComponent, LoginComponent, RegisterComponent],
  providers: [],
})
export class UserModule {}
