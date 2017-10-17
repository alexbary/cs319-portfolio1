import { Component, OnInit } from '@angular/core';
import { DataService } from "../data/data.service";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
	// private data;
	// private stats;
	private availableGames;

	user: string; 
	numCompleted: number; 
	numInProgress: number;
  	numWon: number;
  	numLost: number;
  	numStalemates: number;

  	constructor(private ds: DataService) { }

  	ngOnInit() {
  		let name = JSON.parse(localStorage.getItem('currentUser'));
  		this.user = name[0];

  		this.ds.getAvailableGames().subscribe(result => this.availableGames = result);
  		// this.ds.getStats().subscribe(result => this.data = result);
  	}

  	joinGame(gameID: string) {
  		alert("Game " + gameID + " has been selected.");
  	}

}
