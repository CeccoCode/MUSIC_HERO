import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  order: Order = new Order();
  isLoading: boolean = true; // Aggiungi una variabile per tenere traccia dello stato di caricamento

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) => {
        this.order = order;
        this.isLoading = false; // Imposta isLoading su false quando i dati sono stati caricati
      },
      error: () => {
        this.router.navigateByUrl('/checkout');
      }
    });
  }
}