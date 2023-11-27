import { Injectable } from '@angular/core';
import { map, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public checkPassword(password: string) {
    // response within 1 seconds
    return timer(Math.random() * 1000).pipe(map(() => password === 'Kingsley'));
  }
}
