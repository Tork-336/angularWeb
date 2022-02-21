import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'prograColWeb';

	constructor(private listProductComponent: ListProductComponent, private router: Router) { }

	ngOnInit() {
		this.router.navigate(['/product/list']);
	}

	updateProduct() {
		this.listProductComponent.onSubmitProductToUpdate();
	}

	onCreateProducts() {
		console.log(" Se llamo la funcion...!!");
	}
}
