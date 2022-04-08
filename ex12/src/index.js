function splitArrayInGroups(arr, n) {

    var result = [];
    var end = 0;
    var i = 0;

    for (i = 0; i < arr.length; i += n) {
        end = i + n;
        var arr1 = arr.slice(i, end);
        result.push(arr1);
    }

    return result;
}

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));