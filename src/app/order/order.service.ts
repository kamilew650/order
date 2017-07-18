import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Order } from '../order/order';

@Injectable ()
export class OrderService {
    private orderUrl = 'api/order';
    private headers = new Headers({ 'ContentType': 'aplication/json'});

    constructor(private http: Http) { }

}
