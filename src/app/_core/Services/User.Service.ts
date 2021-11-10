import { BASE_URL } from './../Utils/setting';
import { IUserLogin, IUserRegister } from './../Model/User.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {}
  login(data: IUserLogin) {
    return this.httpClient.post(`${BASE_URL}/api/Users/signin`, data);
  }
  register(data: IUserRegister) {
    return this.httpClient.post(`${BASE_URL}/api/Users/signup`, data);
  }
}
