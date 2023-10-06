var obj = [{"name": "aswanth", "age": "21", "designation": "pm"}];


//for In
for(let key in obj){
    console.log(obj[key]);
}

//for loop

for(var i=0; i<=obj.length; i++){
    var obj1 = obj[i];
    console.log(obj1);
}

//for of

for(let key of obj){
    console.log(key);
}

//for each

obj.forEach(function(obj1){
    console.log(obj1.age);
});

