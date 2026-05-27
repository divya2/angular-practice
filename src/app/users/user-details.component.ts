import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersComponent } from './users.component';

@Component({
  selector: 'app-user-details',
  imports: [RouterLink],
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
    private route = inject(ActivatedRoute);

  userId = computed(() => this.route.snapshot.paramMap.get('id'));
}
