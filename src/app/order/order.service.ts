import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Order } from '../order/order';

@Injectable ()
export class OrderService {
    private orderUrl = 'api/orders/getall';
    private headers = new Headers({ 'ContentType': 'aplication/json'});

    constructor(private http: Http) { }

    getOrders(): Promise<Order[]> {
        return this.http
            .get(this.orderUrl)
            .toPromise()
            .then(response => response.json().data as Order[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
