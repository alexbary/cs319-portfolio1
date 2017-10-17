import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { DataService } from "../data/data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	model: any = {};
  	loading = false;
  	private data;

  	constructor(private router: Router, private ds: DataService) { }

  	ngOnInit() {
  	}

  	register() {
  		return this.ds.createNewUser(this.model.username, this.model.password).subscribe(result => {
  			this.loading = true;
  			this.data = result; 
	  		localStorage.setItem('currentUser', JSON.stringify(this.data));
	  		this.router.navigate(["/lobby"]);
	  		this.loading = false;
  		});
  	}
}