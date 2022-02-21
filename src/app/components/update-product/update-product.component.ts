import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ServicesInjectableService } from '../services/services-injectable.service';

@Component({
	selector: 'app-update-product',
	templateUrl: './update-product.component.html',
	styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

	public form: FormGroup;
	public producsToUpdateData: Product[] = [];

	constructor(private formBuilder: FormBuilder, private productsService: ServicesInjectableService) {
		this.form = this.formBuilder.group({
			productsArray: this.formBuilder.array([])
		});
	}

	ngOnInit() {
		this.productsService.setData$.subscribe(response => {
			for (const add of response) {
				this.producsToUpdateData.push(add);
			}
		});
		for (const product of this.producsToUpdateData) {
			const newProduct = this.formBuilder.group({
				id: ['', Validators.required],
				creationDate: ['', Validators.required],
				description: ['', Validators.required],
				expiryDate: ['', Validators.nullValidator],
				name: ['', Validators.required],
				price: ['', Validators.required]
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

	onClickRemoveTemplateProduct(productIndex: number) {
		this.products().removeAt(productIndex);
	}

}
