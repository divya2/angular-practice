import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
    private route = inject(ActivatedRoute);

  productId = computed(() => this.route.snapshot.paramMap.get('id'));
}
