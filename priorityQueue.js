/*
 * Priority Queue Implementation
 * Using an array of nodes
 * Each node has a rank property to determine priority
 */

var Node = function(val, rank){
    this.value = val
    this.rank = rank
}

var PriorityQueue = function(arr){
    var heapify = function(arr){
        var i = arr.length - 1
        while (i > 0){
            var parent = Math.floor(i/2)

            if (arr[i].rank > arr[parent].rank){
                var temp = arr[parent]
                arr[parent] = arr[i]
                arr[i] = temp
            }

            i = parent
        }

        return arr
    }

    this.queue = heapify(arr)

    this.isEmpty = function() {
        return this.queue.length === 0
    }

    this.pop = function() {
        var max = this.queue.shift()
        this.queue = heapify(this.queue)
        return max
    }

    this.insert = function(node) {
        this.queue.push(node)
        this.queue = heapify(this.queue)
        return this.queue
    }
}

var node1 = new Node("a", 10)
var node2 = new Node("b", 9)
var node3 = new Node("c", 8)
var node4 = new Node("e", 20)
var pq = new PriorityQueue([])

console.log(pq.isEmpty())
console.log(pq.insert(node1))
console.log(pq.insert(node2))
console.log(pq.insert(node3))
console.log(pq.insert(node4))
console.log(pq.pop())
console.log(pq.queue)
console.log(pq.isEmpty())