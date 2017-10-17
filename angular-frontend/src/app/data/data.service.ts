import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  	constructor(private http : Http){
  	}

  	getStats() {
  		return this.http.get("http://localhost:80/319_portfolio_PHP/api/getStats.php").map((response:Response) => response.json());
  	}

  	getRecords() {
  		return this.http.get("http://localhost:80/319_portfolio_PHP/api/getRecords.php").map((response:Response) => response.json());	
  	}

  	getAvailableGames() {
  		return this.http.get("http://localhost:80/319_portfolio_PHP/api/getAvailableGames.php").map((response:Response) => response.json());
  	}

  	getYourGames(username: string) {
  		return this.http.get("http://localhost:80/319_portfolio_PHP/api/getYourGames.php?username=" + username).map((response:Response) => response.json());
  	}

  	getGameData(gameID: string) {
  		return this.http.get("http://localhost:80/319_portfolio_PHP/api/getGameData.php?gameID=" + gameID).map((response:Response) => response.json());
  	}

  	submitMove(move: string, gameID: string) {
  		return this.http.get("http://localhost:80/319_portfolio_PHP/api/submitMove.php?move=" + move + "&gameID=" + gameID).map((response:Response) => response.json());
  	}

  	submitNewGame(username: string) {
  		return this.http.get("http://localhost:80/319_portfolio_PHP/api/submitNewGame.php?username=" + username).map((response:Response) => response.json());
  	}

  	quitGame(username: string, gameID: string) {
  		return this.http.get("http://localhost:80/319_portfolio_PHP/api/quitGame.php?username=" + username + "&gameID=" + gameID);
  	}

  	createNewUser(username: string, password: string) {
  		return this.http.get("http://localhost:80/319_portfolio_PHP/api/createNewUser.php?username=" + username + "&password=" + password).map((response:Response) => response.json());
  	}
}