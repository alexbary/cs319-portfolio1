import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../auth/authentication.service";
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	model: any = {};
  loading = false;
  private data;

  constructor(private a: AuthenticationService, private router: Router) { }

	ngOnInit() {
		this.a.logout();
	}

	login() {
		return this.a.login(this.model.username, this.model.password).subscribe(result => {
			this.loading = true;
			this.data = result; 

			if (this.data[0] == this.model.username) {
				localStorage.setItem('currentUser', JSON.stringify(this.data));
  			this.router.navigate(["/lobby"]);
  		} else {
  			alert("Incorrect Username or Password.");
  		}
  		this.loading = false;
		});
	}
}
