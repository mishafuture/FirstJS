'use strict';

const inputArray = [7, 2, 5, 1, 3, 4, 8, 1];

function sort (array) {
    const evenArray = [],
        oddArray = [];

    array.forEach((item) => {
        if (item % 2 === 0)
            evenArray.push(item);
        else
            oddArray.push(item);
    });

    function bubbleSort (array, compare) {
        let length = array.length - 1,
            swapped;

        do {
            swapped = false;
            for (let j = 0; j < length; j++) {
                if (compare(array[j], array[j + 1])) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                }
            }
            length--;
        } while(swapped);
    }

    bubbleSort(oddArray, (a, b) => a < b);
    bubbleSort(evenArray, (a, b) => a > b);

    return [...oddArray, ...evenArray];
}

const result = sort(inputArray);
console.log(result);

