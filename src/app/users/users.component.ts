import { Component, Input } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import { RouterLink } from '@angular/router';
import { UserCardComponent } from './user-card.component';

@Component({
  selector: 'app-user',
  imports: [UserCardComponent],
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users = [
    { id: 1, name: 'Arun' },
    { id: 2, name: 'Divya' },
    { id: 3, name: 'Priya' }
  ];
}
