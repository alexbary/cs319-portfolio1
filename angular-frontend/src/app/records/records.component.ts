import { Component, OnInit } from '@angular/core';
import { DataService } from "../data/data.service";
import { MatTableModule } from '@angular/material';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
	private table;

  	constructor(private ds: DataService) { }

  	ngOnInit() {
  		this.ds.getRecords().subscribe(result => {this.table = result;});
  	}
}
