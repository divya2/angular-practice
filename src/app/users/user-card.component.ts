import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  template: `
    <div>
      <h3>{{ name }}</h3>
      <a [routerLink]="['/users', id]">View Details</a>
    </div>
  `
})
export class UserCardComponent {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) name!: string;
}