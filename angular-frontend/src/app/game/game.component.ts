import { Component, OnInit } from '@angular/core';
import { DataService } from "../data/data.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
	private ongoingGames;
	user: string;

  	constructor(private ds: DataService) { 
	}

  	ngOnInit() {
  		let name = JSON.parse(localStorage.getItem('currentUser'));
  		this.user = name[0];
  		this.ds.getYourGames(this.user).subscribe(result => this.ongoingGames = result);
  	}

  	switchTo(gameID: string) {
  		alert("Switching to Game: " + gameID);
  	}
}
