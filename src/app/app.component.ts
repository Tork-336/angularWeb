import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ServicesInjectableService } from './components/services/services-injectable.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'prograColWeb';

	constructor(private listProductComponent: ListProductComponent, private router: Router, private serviceProducts: ServicesInjectableService) { }

	ngOnInit() {
		this.router.navigate(['/product/list']);
	}
}
