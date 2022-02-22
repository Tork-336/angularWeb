import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ServicesInjectableService } from '../services/services-injectable.service';

@Component({
	selector: 'app-delete-product',
	templateUrl: './delete-product.component.html',
	styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

	public form: FormGroup;
	public productDelete: Product[] = [];

	constructor(private formBuilder: FormBuilder, private service: ProductService, private serviceComponents: ServicesInjectableService) { 
		this.form = this.formBuilder.group({
			productsArray: this.formBuilder.array([])
		});
	}

	ngOnInit() {
		this.serviceComponents.setData$.subscribe(response => {
			for (const add of response) {
				this.productDelete.push(add);
			}
		});

		for (const product of this.productDelete) {
			const newProduct = this.formBuilder.group({
				id: [{disabled: true}],
				creationDate: [{disabled: false}],
				description: [{disabled: false}],
				expiryDate: [{disabled: true}],
				name: [{disabled: true}],
				price: [{disabled: true}]
			});
			newProduct.setValue({
				id: product.id,
				creationDate: product.creationDate,
				description: product.description,
				expiryDate: product.expiryDate,
				name: product.name,
				price: product.price
			});
			this.products().push(newProduct);
		}
	}

	products(): FormArray {
		return this.form.controls["productsArray"] as FormArray;
	}

	onSubmitProduct() {
		this.service.deleteProduct(this.form.value.productsArray);
	}

}
