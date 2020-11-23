function fun(a, b) {
    console.log("a=" + a);
    console.log("b=" + b);
}
let obj = {
    name: "obj",
    sayName: function () {
        alert(this.name);
    }
}

fun.call(obj, 2, 3);
//fun.apply(obj,[2,3]);