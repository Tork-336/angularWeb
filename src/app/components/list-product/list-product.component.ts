import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ServicesInjectableService } from '../services/services-injectable.service';

@Component({
	selector: 'app-list-product',
	templateUrl: './list-product.component.html',
	styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

	public products = {};
	public page: number = 0;
	public size: number = 3;
	public all: boolean = false;
	public addProduct: Product[] = [];

	constructor(private service: ProductService, private serviceComponents: ServicesInjectableService) { }

	ngOnInit() {
		this.loadData(false, this.page, this.size);
	}

	loadData(all, page, size) {
		this.service.getAllproducts(all, page, size).subscribe(
			response => {
				if (response.success) {
					this.products = response.data;
				} else {
					console.log(response.message);
				}
			}, error => {
				console.log(error);
			});
	}

	onPrev(): void {
		this.loadData(this.all, this.page -= 1, this.size);
	}

	onNext(): void {
		this.loadData(this.all, this.page += 1, this.size);
	}

	onChangeAll(event: any): void {
		this.all = event.target.checked;
	}

	onAddProductUpdate(product): void{
		this.addProduct.push(product);
	}

	onSubmitProductToDelete() {
		this.service.deleteProduct(this.addProduct);
	}
	
	ngOnDestroy() {
		this.serviceComponents.setProducts(this.addProduct);
	}

}
