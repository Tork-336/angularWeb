import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AppRoutingModule } from './app-routing.module';
import { AddDinamycFieldComponent } from './components/add-dinamyc-field/add-dinamyc-field.component';
import { ListProductComponent } from './components/list-product/list-product.component';

@NgModule({
	declarations: [
		AppComponent,
		CreateProductComponent,
		UpdateProductComponent,
		AddDinamycFieldComponent,
		ListProductComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [ListProductComponent],
	bootstrap: [AppComponent]
})
export class AppModule {

	constructor(private injector: Injector) { }

	//In case of angular elements, we need to bootstrap manually
	ngDoBootstrap() {
		var el = createCustomElement(AddDinamycFieldComponent, { injector: this.injector });
		customElements.define('app-greeter', el);
	}
}
