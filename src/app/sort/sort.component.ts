import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  array = [];
  algos = ['Bubble Sort', 'Merge Sort', 'Quick Sort', 'Heap Sort'];
  selectedAlgo: string;
  speed = ['Slow', 'Medium', 'Fast'];
  selectedSpeed: string;
  arrayLength = 33;
  speedTime = 500;
  reset = false;
  running: boolean;

  constructor() {
  }

  ngOnInit() {
    this.generateRandomArray();
    this.selectedAlgo = this.algos[0];
    this.selectedSpeed = this.speed[0];

  }

  generateRandomArray() {
    this.running = false;
    this.array = [];
    this.array = Array.from({ length: this.arrayLength }, () => this.randomIntFromInterval(30, 450));
  }

  getStyle(arr) {
    return arr.toString() + 'px';
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  speedChanged(speed) {
    switch (speed) {
      case 'Slow':
        this.speedTime = 500;
        break;
      case 'Medium':
        this.speedTime = 250;
        break;
      case 'Fast':
        this.speedTime = 0;
        break;
      default:
        break;
    }
  }

  visualize() {
    switch (this.selectedAlgo) {
      case 'Bubble Sort':
        this.bubbleSorts();
        break;

      default:
        break;
    }
  }



  async bubbleSorts() {
    this.running = true;
    const len = this.array.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
        document.getElementById('bar_' + i).style.backgroundColor = '#637c3d';
        document.getElementById('bar_' + (i + 1)).style.backgroundColor = '#637c3d';

        if (this.array[i] > this.array[i + 1]) {
          const tmp = this.array[i];
          this.array[i] = this.array[i + 1];
          this.array[i + 1] = tmp;
          swapped = true;
        }
        await new Promise(resolve => setTimeout(resolve, this.speedTime));
        document.getElementById('bar_' + i).style.backgroundColor = '#563d7c';
        document.getElementById('bar_' + (i + 1)).style.backgroundColor = '#563d7c';
        if (!this.running) {
          return;
        }
      }
    } while (swapped);

    this.running = false;
    return this.array;
  }

  async mergeSort() {
    //TODO 
  }

  async quicksort() {
    //TODO
  }

  async heapsort() {
    //TODO 
  }

}
