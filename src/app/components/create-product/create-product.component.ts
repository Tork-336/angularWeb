import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "../../services/product.service";

@Component({
	selector: 'app-create-product',
	templateUrl: './create-product.component.html',
	styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

	initComponent = false;
	form: FormGroup;
	constructor(private formBuilder: FormBuilder, private service: ProductService) {
		this.form = this.formBuilder.group({
			productsArray: this.formBuilder.array([])
		});
	 }

	ngOnInit() {
		this.initComponent = true;
	}

	products(): FormArray {
		return this.form.controls["productsArray"] as FormArray;
	}

	onClickNewTemplateProduct() {
		const newProduct = this.formBuilder.group({
			createDate: ['', Validators.required],
			description: ['', Validators.required],
			expiryDate: ['', Validators.nullValidator],
			name: ['', Validators.required],
			price: ['', Validators.required]
		});
		this.products().push(newProduct);
	}

	onClickRemoveTemplateProduct(productIndex: number) {
		this.products().removeAt(productIndex);
	}

	onSubmitProduct() {
		console.log(this.form.value.productsArray);
		this.service.postProduct(this.form.value.productsArray).subscribe(response => {
			if (response.success) {
				alert("Exito agregando...!");
			} else {
				console.log(response);
				alert(response.message);
			}
		});
	}

}
