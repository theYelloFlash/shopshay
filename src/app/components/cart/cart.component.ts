import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartResponse } from '../../models/cart.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { CartItemscountService } from '../../services/cart-itemscount.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartResponse: CartResponse[] = []
  dataSource!: MatTableDataSource<CartResponse>;
  displayedColoumns: string[] = ['product', 'price', 'quantity', 'subtotal', 'action']
  form!: FormGroup;
  itemsPrice = []

  constructor(private apiServ: ApiService, private fb: FormBuilder,
    private loader: NgxUiLoaderService,
    private toastr: ToastrService, private itemsIncart: CartItemscountService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = this.fb.group({
      quantities: this.fb.array([]) // Create a FormArray for quantities
    });
    this.getCart()
  }


  get quantities(): FormArray {
    return this.form.get('quantities') as FormArray;
  }

  getQuantityControl(index: number): FormControl {
    return this.quantities.at(index) as FormControl;
  }

  getCart() {
    this.apiServ.getAllCartItems().subscribe({
      next: (res) => {
        this.cartResponse = res;
        const quantitiesArray = this.form.get('quantities') as FormArray;
        this.dataSource = new MatTableDataSource(this.cartResponse)
        this.cartResponse.forEach(() => {
          quantitiesArray.push(new FormControl(1)); // Default quantity is 1
        });
      }
    })
  }

  get subTotal() {
    let subtotal = 0;
    this.cartResponse.forEach((ele, index) => {
      subtotal += parseInt(ele.price) * this.quantities.at(index).value;
    })
    return subtotal;
  }

  removeFromCart(item: CartResponse, index: number) {
    this.apiServ.deleteCartitem(item.uuid).subscribe({
      next: (res) => {
        this.cartResponse.splice(index, 1)
        this.dataSource.data = [...this.cartResponse];
        this.itemsIncart.decreaseCartCountValue()
        this.quantities.removeAt(index); // Remove the corresponding quantity control
        this.toastr.success('Removed from cart')
      },
      error: (err) => {
        this.toastr.error('Error removing cart')
      }
    })
  }


  emptyCart() {
    this.loader.start();
    this.apiServ.emptyCart().subscribe({
      next: (res) => {
        this.loader.stop()
        this.dataSource.data = [];
        this.itemsIncart.updateCartCount(0);
        this.cartResponse = []
      },
      error: (err) => {
        this.loader.stop()
      }
    })
  }
}
