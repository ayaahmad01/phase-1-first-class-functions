function receivesAFunction(someFunction) {
    someFunction()
}
function returnsANamedFunction() {
    return function named() {
return "hey"
    }
}
function returnsAnAnonymousFunction() {
    return function() {
return "hey"
    }
}