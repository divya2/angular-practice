import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
    private route = inject(ActivatedRoute);

  productId = computed(() => this.route.snapshot.paramMap.get('id'));
}
