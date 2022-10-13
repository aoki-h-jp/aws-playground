function rangeIterator (start, end) {
    if (start > end) {
        throw 'start < end'
    }
    let returnValue = start;
    let iterEnd = false;
    console.log(returnValue);
    return {
        next() {
            if (returnValue > end) {
                iterEnd == true;
            }
            return {
                done: iterEnd,
                value: returnValue++
            }
        }
    }
}

const iter = rangeIterator(1, 10);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());