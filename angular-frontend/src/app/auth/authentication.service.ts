import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  	constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.get("http://localhost:80/319_portfolio_PHP/api/login_exec.php?username=" + username + "&password=" + password).map(response => { console.log(response.json()); return response.json(); });
                                                                                                                                         
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
