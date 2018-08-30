/*
 * Disjoint Sets Implementation
 * Using array to represent a tree
 * This object is designed in a way to be able to use for Prim's Algorithm and other graph algorithms
 */

var DisjointSet = function() {
    this.mapOfIndeces = {}
    this.set = []

    this.getNumSets = function(){
        var sets = this.set.filter(val => val === -1);
        return sets.length
    }

    this.createSet = function(el){
        this.mapOfIndeces[el] = this.set.length
        this.set.push(-1)
    }

    this.findSet = function(el){
        var index = this.mapOfIndeces[el]
        var setVal = this.set[index]

        while (setVal >= 0) {
            index = setVal
            setVal = this.set[setVal]
        }

        return index
    }

    this.mergeSets = function(a,b){
        var rootA = this.findSet(a)
        var rootB = this.findSet(b)

        if (rootA != rootB){
            if (this.set[rootA] < this.set[rootB]){
                this.set[rootB] = rootA
            } else {
                this.set[rootA] = rootB
            }
        }
    }

    this.isInSameSet = function(a, b){
        return this.findSet(a) === this.findSet(b)
    }
}

var test = new DisjointSet()

test.createSet('a')
test.createSet('b')
test.createSet('c')
test.createSet('d')
test.createSet('e')
test.createSet('f')

console.log(test.getNumSets())
console.log(test.findSet('a'))
console.log(test.findSet('b'))
console.log(test.isInSameSet('a', 'b'))
test.mergeSets('a', 'b')
console.log(test.getNumSets())
console.log(test.isInSameSet('a', 'b'))
test.mergeSets('a', 'c')
console.log(test.getNumSets())
console.log(test.isInSameSet('b', 'c'))
