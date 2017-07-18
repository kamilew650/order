import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Order } from '../order/order';
import { OrderService } from '../order/order.service';

@Component({
    selector: 'app-add',
    templateUrl: 'add.component.html',
    styleUrls: [ 'add.component.css' ]
})

export class AddComponent implements OnInit {
    private orders: Order[];

    constructor(private orderService: OrderService) { }

    addProduct(name: string): void {
        name = name.trim();
        if (!name) { return; }
    }

    ngOnInit(): void {
        this.getOrders();
    }

    getOrders(): void {
        this.orderService.getOrders().then(orders => this.orders = orders);
    }
}
