import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-finding',
  templateUrl: './path-finding.component.html',
  styleUrls: ['./path-finding.component.css']
})
export class PathFindingComponent implements OnInit {

  algos = ["Dijikstra", "BLALA"];
  rows = [];
  cols = [];
  constructor() { }

  ngOnInit() {
    for (var i = 0; i < 20; i++) {
      this.rows.push(i);
    }
    for (var i = 0; i < 36; i++) {
      this.cols.push(i);
    }
  }

}
