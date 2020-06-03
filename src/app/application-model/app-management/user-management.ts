import { Injectable } from '@angular/core';
import { UserManager } from '../app-manager/user-manager';

@Injectable({
  providedIn: 'root'
})
export class UserManagement {
  constructor(private userManager: UserManager) {}
}
