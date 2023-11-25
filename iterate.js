var details=[{
    name:"IlakiaSelvi ",
    age:25,
    gender:"Female",
    degree:"BE"
},
    {
        name:"Saravanan",
        age:28,
        gender:"male",
        degree:"BE"
    }

];
for(var i=0;i<details.length;i++){
    var obj=details[i];
    console.log("name:"+obj.name);
    console.log("age:"+obj.age);
    console.log("degree:"+obj.degree);
    console.log("gender:"+obj.gender);
}
//for each
details.forEach(function(obj){
    console.log(obj.name);
})

//for In
for(var num in details)
   {
        console.log(num,details[num]);
    }

//for of
for(var execution of details){
    console.log(execution);
}
