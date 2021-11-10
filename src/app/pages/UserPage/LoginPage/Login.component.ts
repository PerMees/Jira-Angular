import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from './../../../_core/Services/User.Service';
import { IUserLogin } from './../../../_core/Model/User.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: ` <div class="container mx-auto">
    <form
      #formLogin="ngForm"
      (ngSubmit)="login(formLogin.value)"
      class="text-white"
    >
      <h3 class="text-2xl text-center font-bold mt-4 text-white">Register</h3>
      <div class="mt-3">
        <p>Email:</p>
        <input
          [(ngModel)]="userLogin.email"
          [ngClass]="
            email.errors
              ? 'border-l-4 border-red-600'
              : 'border-l-4 border-green-600'
          "
          class="w-full mt-1 text-gray-900 p-1 rounded outline-none "
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
          required
          #email="ngModel"
          ngModel
        />
        <div *ngIf="(email.touched || email.dirty) && email.errors">
          <p
            *ngIf="email.errors.required"
            class="bg-red-200 text-black mt-2 rounded-sm p-1 text-sm border-red-300 border-2"
          >
            Email is required!
          </p>
          <p
            *ngIf="email.errors.pattern"
            class="bg-red-200 text-black mt-2 rounded-sm p-1 text-sm border-red-300 border-2"
          >
            Email wrong format!
          </p>
        </div>
      </div>
      <div class="mt-3">
        <p>Password:</p>
        <input
          [(ngModel)]="userLogin.passWord"
          [ngClass]="
            passWord.errors
              ? 'border-l-4 border-red-600'
              : 'border-l-4 border-green-600'
          "
          class="w-full mt-1 text-gray-900 p-1 rounded outline-none "
          name="passWord"
          type="password"
          required
          #passWord="ngModel"
          ngModel
        />
        <div *ngIf="(passWord.touched || passWord.dirty) && passWord.errors">
          <p
            *ngIf="passWord.errors.required"
            class="bg-red-200 text-black mt-2 rounded-sm p-1 text-sm border-red-300 border-2"
          >
            Password is required!
          </p>
        </div>
      </div>
      <div class="flex items-center justify-between mt-3">
        <label nz-checkbox class="text-white"> Remember me </label>
        <a routerLink="forgot-password" class="text-right">Forgot password?</a>
      </div>
      <div class="mt-4 text-center">
        Don't have an account?
        <a routerLink="/user/register" class="font-bold">Register</a>
      </div>
      <div class="flex items-center justify-center mb-4">
        <button
          type="submit"
          class="text-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 mt-3 mx-auto rounded"
        >
          Login
        </button>
      </div>
      <div class="social-login mb-4">
        <div class="flex items-center justify-center">
          <hr class="border-gray-200 w-1/3 mx-3 mt-2" />
          <p class="text-center mt-2">or</p>
          <hr class="border-gray-200 w-1/3 mx-3 mt-2" />
        </div>
        <div
          class="bg-blue-600 hover:bg-blue-700 text-gray-100 cursor-pointer my-2 text-center mx-6 py-2 rounded transition-all duration-300"
        >
          Login by Facebook
        </div>
        <div
          class="bg-red-600 hover:bg-red-700 text-gray-100 cursor-pointer my-2 text-center mx-6 py-2 rounded transition-all duration-300"
        >
          Login by Google
        </div>
        <div
          class="bg-gray-600 hover:bg-gray-700 text-gray-100 cursor-pointer my-2 text-center mx-6 py-2 rounded transition-all duration-300"
        >
          Login by GitHub
        </div>
      </div>
    </form>
  </div>`,
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private message: NzMessageService,
    private router: Router
  ) {}
  userLogin: IUserLogin = {
    email: '',
    passWord: '',
  };
  login(values: any) {
    console.log(values);
    this.userService.login(values).subscribe(
      (res: any) => {
        this.message.success('Register success!');
        localStorage.setItem('accessToken', res.content.accessToken);
        localStorage.setItem('userAccount', JSON.stringify(res.content));
        this.router.navigate(['']);
        console.log(res);
      },
      (err) => {
        this.message.error('Register failed!');
        console.log(err);
      }
    );
  }

  ngOnInit() {}
}
