/*
 * Min Heap Implementation
 * Using an array
 */

var MinHeap = function(arr){
    var heapify = function(arr) {
        var i = arr.length - 1

        if (i === 0) { return arr }

        while (i > 0){
            var parent = Math.floor(i-1/2)

            // if parent is bigger than i
            if (arr[parent] > arr[i]){
                var temp = arr[parent]

                arr[parent] = arr[i]
                arr[i] = temp

                i = parent
            } else {
                return arr
            }
        }

        return arr
    }
    
    this.heap = heapify(arr)

    this.getMin = function(){
        const min = this.heap.shift()
        this.heap = heapify(this.heap)
        return min
    }

    this.insert = function(n){
        this.heap.push(n)
        this.heap = heapify(this.heap)

        return this.heap
    }
}

console.log("Min Heap")
var test = new MinHeap([1,2,3,4,5,6,7])
console.log(test.insert(0))
console.log(test.insert(10))
console.log(test.insert(1))
console.log(test.getMin())
console.log(test.heap)
console.log(test.insert(-1))

/*
 * Max Heap Implementation
 * Using an array
 */

var MaxHeap = function(arr){
    var heapify = function(arr) {
        var i = arr.length - 1

        if (i === 0) { return arr }

        while (i > 0){
            var parent = Math.floor(i-1/2)

            // if parent is bigger than i
            if (arr[parent] < arr[i]){
                var temp = arr[parent]

                arr[parent] = arr[i]
                arr[i] = temp

                i = parent
            } else {
                return arr
            }
        }

        return arr
    }

    this.heap = heapify(arr)

    this.getMax = function(){
        const max = this.heap.shift()
        this.heap = heapify(this.heap)
        return max
    }

    this.insert = function(n){
        this.heap.push(n)
        this.heap = heapify(this.heap)

        return this.heap
    }
}

console.log("Max Heap")
var test = new MaxHeap([1,2,3,4,5,6,7])
console.log(test.insert(0))
console.log(test.insert(10))
console.log(test.insert(1))
console.log(test.getMax())
console.log(test.heap)
console.log(test.insert(-1))