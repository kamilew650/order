import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Order } from '../order/order';
import { OrderService } from '../order/order.service';

@Component({
    selector: 'app-add',
    templateUrl: 'add.component.html',
    styleUrls: [ 'add.component.css' ]
})

export class AddComponent {
    private orders: Order[];

    constructor () { }

    addProduct(name: string): void {
        name = name.trim();
        if (!name) { return; }
    }

}
