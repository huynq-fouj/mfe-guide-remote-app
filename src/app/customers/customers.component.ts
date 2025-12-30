import { Component, OnInit } from '@angular/core';
import { Customer, CustomerRequestParams, CustomersResponse } from '../types';
import { CustomerService } from '../services/customer.service';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule, 
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  params: CustomerRequestParams = {
    page: 0,
    size: 10,
    isHiddenDefault: false
  }
  customers: CustomersResponse = [];
  loading: boolean = false;
  total: number = 0;
  rowsPerPageOptions = [10, 20, 50];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.loading = true;
    this.customerService.getCustomers(this.params).pipe(finalize(() => this.loading = false)).subscribe({
      next: res => {
        this.customers = res.data;
        this.total = res.count;
      },
      error: (err) => {
        console.error('Lỗi tải danh sách:', err);
        this.customers = [];
        this.total = 0;
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.total / this.params.size);
  }

  nextPage() {
    if (this.params.page < this.totalPages - 1) {
      this.params.page++;
      this.getCustomers();
    }
  }

  prevPage() {
    if (this.params.page > 0) {
      this.params.page--;
      this.getCustomers();
    }
  }

  onSizeChange(event: any) {
    this.params.size = +event.target.value;
    this.params.page = 0;
    this.getCustomers();
  }

  viewDetail(customer: Customer) {
    window.dispatchEvent(
      new CustomEvent('easypos:view-detail-customer', {
        detail: customer
      })
    );
  }
}
