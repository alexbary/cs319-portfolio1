import { Component, OnInit } from '@angular/core';
import { DataService } from "../data/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

	user: string;
	private table; 

  	constructor(private ds: DataService, private router: Router) { }

  	ngOnInit() {
  	}

  	createNewGame() {
  		let name = JSON.parse(localStorage.getItem('currentUser'));
  		this.user = name[0];
  		
  		this.ds.submitNewGame(this.user).subscribe(result => {this.table = result;});;
  		this.router.navigate(["/lobby"]);
  	}

}
