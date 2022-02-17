import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'prograColWeb';

	constructor() { }

	ngOnInit() {
	}

	onCreateProducts() {
		console.log(" Se llamo la funcion...!!");
	}
}
