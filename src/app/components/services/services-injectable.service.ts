import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ListProductComponent } from '../list-product/list-product.component';

@Injectable({
	providedIn: 'root'
})
export class ServicesInjectableService {

	private buildObserverSource = new Subject<Product[]>();
	public setData$ = this.buildObserverSource.asObservable();

	constructor() { }

	setProducts(productsToUpdate: Product[]) {
		this.buildObserverSource.next(productsToUpdate);
	}
}
