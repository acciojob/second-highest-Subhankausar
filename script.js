function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity; // Not enough elements to find a second-highest
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    if (secondMax === -Infinity || secondMax === max) {
        return -Infinity; // All elements are the same or there is no distinct second-highest
    }

    return secondMax;
}
