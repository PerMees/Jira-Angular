import { UserService } from './../../../_core/Services/User.Service';
import { IUserRegister } from './../../../_core/Model/User.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
    <div class="user-register container mx-auto">
      <form
        #formRegister="ngForm"
        (ngSubmit)="register(formRegister.value)"
        class="text-white"
      >
        <h3 class="text-2xl text-center font-bold mt-4 text-white">Register</h3>
        <div class="mt-3">
          <p>Email:</p>
          <input
            [(ngModel)]="userRegister.email"
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
            [(ngModel)]="userRegister.passWord"
            [ngClass]="
              passWord.errors
                ? 'border-l-4 border-red-600'
                : 'border-l-4 border-green-600'
            "
            class="w-full mt-1 text-gray-900 p-1 rounded outline-none "
            name="passWord"
            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
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
            <p
              *ngIf="passWord.errors.pattern"
              class="bg-red-200 text-black mt-2 rounded-sm p-1 text-sm border-red-300 border-2"
            >
              Minimum 8 characters, at least one uppercase letter, one lowercase
              letter, one number and one special character
            </p>
          </div>
        </div>
        <div class="mt-3">
          <p>Name:</p>
          <input
            [(ngModel)]="userRegister.name"
            [ngClass]="
              name.errors
                ? 'border-l-4 border-red-600'
                : 'border-l-4 border-green-600'
            "
            class="w-full mt-1 text-gray-900 p-1 rounded outline-none "
            name="name"
            required
            #name="ngModel"
            ngModel
          />
          <div *ngIf="(name.touched || name.dirty) && name.errors">
            <p
              *ngIf="name.errors.required"
              class="bg-red-200 text-black mt-2 rounded-sm p-1 text-sm border-red-300 border-2"
            >
              Name is required!
            </p>
          </div>
        </div>
        <div class="mt-3">
          <p>Phone Number:</p>
          <input
            [(ngModel)]="userRegister.phoneNumber"
            [ngClass]="
              phoneNumber.errors
                ? 'border-l-4 border-red-600'
                : 'border-l-4 border-green-600'
            "
            class="w-full mt-1 text-gray-900 p-1 rounded outline-none "
            name="phoneNumber"
            minlength="8"
            pattern="^[0-9]*$"
            required
            #phoneNumber="ngModel"
            ngModel
          />
          <div
            *ngIf="
              (phoneNumber.touched || phoneNumber.dirty) && phoneNumber.errors
            "
          >
            <p
              *ngIf="phoneNumber.errors.required"
              class="bg-red-200 text-black mt-2 rounded-sm p-1 text-sm border-red-300 border-2"
            >
              Phone number is required!
            </p>
            <p
              *ngIf="phoneNumber.errors.pattern"
              class="bg-red-200 text-black mt-2 rounded-sm p-1 text-sm border-red-300 border-2"
            >
              Phone number wrong type!
            </p>
            <p
              *ngIf="phoneNumber.errors.minlength"
              class="bg-red-200 text-black mt-2 rounded-sm p-1 text-sm border-red-300 border-2"
            >
              Phone number at least 8 characters!
            </p>
          </div>
        </div>
        <div class="mt-4 text-center">
          Already have an account?
          <a routerLink="/user/login" class="font-bold">Login</a>
        </div>
        <div class="flex items-center justify-center my-1">
          <button
            type="submit"
            class="text-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 mt-3 mx-auto rounded"
          >
            Register
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
    </div>
  `,
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService,
    private message: NzMessageService,
    private router: Router
  ) {}
  sub!: Subscription;
  userRegister: IUserRegister = {
    email: '',
    passWord: '',
    name: '',
    phoneNumber: '',
  };
  register(values: any) {
    console.log(values);
    this.sub = this.userService.register(values).subscribe(
      (res) => {
        this.message.success('Register success!');
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
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
