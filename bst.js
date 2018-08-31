/*
 * Implementation of a Binary Search Tree
 */

var Node = function(val){
    this.value = val
    this.left = null
    this.right = null
}

var BST = function(){
    this.root = null

    this.insert = function(node){
        if (this.root){
            var current = this.root
            var placed = false

            while (!placed){
                if (node.value > current.value){
                    if (current.right){
                        current = current.right
                    } else {
                        current.right = node
                        placed = true
                    }
                } else {
                    if (current.left){
                        current = current.left
                    } else {
                        current.left = node
                        placed = true
                    }
                }
            }
        } else {
            this.root = node
        }
    }

    this.search = function(n){
        var current = this.root

        while (current.value != n){
            if (n < current.value){
                current = current.left
            } else {
                current = current.right
            }
        }

        return current
    }

    this.remove = function(n){
        var current = this.root

        while (current){
            if (current.right && current.right.value === n){
                if (!current.right.left && !current.right.right){
                    // first case: node to be removed is a leaf
                    current.right = null
                } else if (!current.right.right){
                    // second case: node to be removed only has one child
                    current.right = current.right.left
                } else if (!current.right.left){
                    // second case: node to be removed only has one child
                    current.right = current.right.right
                } else {
                    // third case: node to be removed has 2 children
                    // find smallest node in right subtree
                    // replace node to be removed with smallest node, remove the smallest node
                    var smallest = current.right.right
                    var parent = current.right

                    while (smallest.left){
                        parent = smallest
                        smallest = smallest.left
                    }

                    current.right.value = smallest.value
                    parent.left = null
                }
            }

            if (current.left && current.left.value === n){
                if (!current.left.left && !current.left.right){
                    // first case: node to be removed is a leaf
                    current.left = null
                } else if (!current.left.right){
                    // second case: node to be removed only has one child
                    current.left = current.left.left
                } else if (!current.left.left){
                    // second case: node to be removed only has one child
                    current.left = current.left.right
                } else {
                    // third case: node to be removed has 2 children
                    // find smallest node in right subtree
                    // replace node to be removed with smallest node, remove the smallest node
                    var smallest = current.left.right
                    var parent = current.left

                    while (smallest.left){
                        parent = smallest
                        smallest = smallest.left
                    }

                    current.left.value = smallest.value
                    parent.left = null
                }
            }

            if (n < current.value){
                current = current.left
            } else {
                current = current.right
            }
        }
    }

    this.getSortedArray = function(){
        var arr = []
        var finished = false
        var stack = []
        var current = this.root

        while (!finished){
            if (current) {
                stack.push(current)
                current = current.left
            } else {
                if (stack.length === 0){
                    finished = true
                    return arr
                }
                current = stack.pop()
                arr.push(current.value)
                current = current.right
            }
        }
    }
}

var test = new BST()
var a = new Node(200)
var b = new Node(100)
var c = new Node(50)
var d = new Node(300)
var e = new Node(250)
var f = new Node(310)
var g = new Node(301)
var h = new Node(311)


test.insert(a)
test.insert(b)
test.insert(c)
test.insert(d)

console.log(test.getSortedArray())

test.insert(e)
console.log(test.getSortedArray())

test.insert(f)
test.insert(g)
test.insert(h)
console.log(test.getSortedArray())

test.remove(300)
console.log(test.getSortedArray())

test.remove(310)
console.log(test.getSortedArray())

test.remove(50)
console.log(test.getSortedArray())

console.log(test.search(200))