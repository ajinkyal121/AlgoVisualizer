// class BubbleSort {
//     private static instance: BubbleSort;
//     constructor() {

//     }

//     public static getInstance(): BubbleSort {
//         if (!BubbleSort.instance) {
//             BubbleSort.instance = new BubbleSort();
//         }

//         return BubbleSort.instance;
//     }

//     async bubbleSort(array) {
//         const len = array.length;
//         let swapped;

//         do {
//             swapped = false;

//             for (let i = 0; i < len - 1; i++) {
//                 document.getElementById('bar_' + i).style.backgroundColor = '#637c3d';
//                 document.getElementById('bar_' + (i + 1)).style.backgroundColor = '#637c3d';

//                 if (array[i] > array[i + 1]) {
//                     const tmp = array[i];
//                     array[i] = array[i + 1];
//                     array[i + 1] = tmp;
//                     swapped = true;
//                 }
//                 await new Promise(resolve => setTimeout(resolve, this.speedTime));
//                 document.getElementById('bar_' + i).style.backgroundColor = '#563d7c';
//                 document.getElementById('bar_' + (i + 1)).style.backgroundColor = '#563d7c';
//                 if (this.reset) { return; }
//             }
//         } while (swapped);

//         return array;
//     }
// }

