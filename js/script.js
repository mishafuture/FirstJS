"use strict";

/*
function pow(number, degree) {
    return (degree === 1 ? number : number * pow(number, degree - 1));
}

console.log(pow(2, 2));
console.log(pow(2, 4));
console.log(pow(2, 5));
console.log(pow(2, 3));*/

let students = {
    js : [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html : {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ivan',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getTotalProgressByIteration(data) {
    let count = 0;
    let total = 0;

    for (const course of Object.values(data)) {
        if (Array.isArray(course)) {
            count += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        }
        else {
            for (const subCourse of Object.values(course)) {
                count += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / count;
}

function getTotalProgressByRecursion(data) {
    let total = 0;

    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    }
    else {
        let total = [0, 0];

        for (const subData of Object.values(data)) {
            const subDataArray = getTotalProgressByRecursion(subData);
            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }

        return total;
    }
}

console.log(getTotalProgressByIteration(students));

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);