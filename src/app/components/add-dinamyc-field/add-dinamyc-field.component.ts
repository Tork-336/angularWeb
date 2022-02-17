import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-dinamyc-field',
	templateUrl: './add-dinamyc-field.component.html',
	styleUrls: ['./add-dinamyc-field.component.css']
})
export class AddDinamycFieldComponent implements OnInit {

	dataService = {};

	constructor() { }

	ngOnInit() {
	}

	ngGenerateTemplateByArray(data: any[]) {
		
	}

}
