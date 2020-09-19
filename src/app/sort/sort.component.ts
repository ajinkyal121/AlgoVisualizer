import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  array = [];
  algos = ['Bubble Sort', 'Merge Sort', 'Quick Sort'];
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
      case 'Merge Sort':
        this.mergeSorts();
        break;
      case 'Quick Sort':
        this.quicksorts();
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

  async mergeSorts() {
    this.running = true;
    await this.mergeSort(this.array, 0, this.array.length - 1);
    this.running = false;
  }

  async mergeSort(array: number[], left: number, right: number) {

    if (array.length <= 1 && this.running) {
      return array;
    }

    if (left < right && this.running) {
      const mid = Math.floor((left + right) / 2);

      await this.mergeSort(array, left, mid);

      await this.mergeSort(array, mid + 1, right);

      await this.merge(array, left, mid, right);
    }

  }

  async merge(array: number[], left: number, mid: number, right: number) {

    const n1 = mid - left + 1;
    const n2 = right - mid;
    const Left: number[] = [];
    const Right: number[] = [];
    for (let i = 0; i < n1; i++) { Left.push(0); }
    for (let i = 0; i < n2; i++) { Right.push(0); }

    for (let i = 0; i < n1; i++) {
      Left[i] = array[left + i];
    }
    for (let i = 0; i < n2; i++) {
      Right[i] = array[mid + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = left;
    for (; i < n1 && j < n2;) {
      if (Left[i] <= Right[j]) {
        array[k] = Left[i];
        i++;
      } else {
        array[k] = Right[j];
        j++;
      }
      k++;
      await new Promise(resolve => setTimeout(resolve, this.speedTime));
    }

    for (; i < n1;) {
      array[k] = Left[i];
      i++;
      k++;
      await new Promise(resolve => setTimeout(resolve, this.speedTime));
    }
    for (; j < n2;) {
      array[k] = Right[j];
      j++;
      k++;
      await new Promise(resolve => setTimeout(resolve, this.speedTime));
    }

    if (!this.running) { return; }

  }

  async quicksorts() {
    this.running = true;

    await this.quickSort(this.array, 0, this.array.length - 1);

    this.running = false;
  }

  async quickSort(array: number[], low: number, high: number) {
    if (low < high && this.running) {
      const pivot = await this.partition(array, low, high);
      if (this.running) { await this.quickSort(array, low, pivot - 1); }
      if (this.running) { await this.quickSort(array, pivot + 1, high); }
    }
  }

  async partition(array: number[], low: number, high: number) {
    const pivot = array[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1 && this.running; j++) {

      if (array[j] < pivot) {
        i++;
        const temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;

        await new Promise(resolve => setTimeout(resolve, this.speedTime));

      }
    }
    if (this.running) {
      const temp = this.array[i + 1];
      this.array[i + 1] = this.array[high];
      this.array[high] = temp;

      await new Promise(resolve => setTimeout(resolve, this.speedTime));
      return (i + 1);
    }
  }

  async heapsort() {
    // TODO
  }

}
