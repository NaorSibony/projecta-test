import { Injectable } from '@angular/core';
import { UserRepository } from '../app-repository/user-repository';

@Injectable({
  providedIn: 'root'
})
export class UserManager {
  constructor(private userRepository: UserRepository) {}
}
