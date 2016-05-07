import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'hello-world',
  // Location of the template for this component
  template: `<button class="btn" (click)="getData()">Add Detail</button>`
})
export class HelloWorld {
	// Declaring the variable for binding with initial value
	yourName: string = '';
	getData() {
		Http.get('/getdata').success(function(data){
			console.log("data",data);	
		});
	}
}
