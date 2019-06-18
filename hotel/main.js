var Hotel = {
    name : "Eram",
    city : "kish island",
    star : 5 ,
    add : "Ferdowsi street , Abshar sq , Daryoush Blv" , 
    facilities : ["wifi", "labi", "restaurant", "parking", "swimming-pool", "jakkozi", "green-space"]
};
var prop= prompt("Enter property name:");
if(prop == "name"){
    console.log(Hotel.name);
}
else if(prop == "city"){
    console.log(Hotel.city);
}
else if(prop == "star"){
    console.log(Hotel.star);
}
else if(prop == "add"){
    console.log(Hotel.add);
}
else if(prop == "facilities"){
    console.log(Hotel.facilities);
}
var result = prompt("Do You want to update this?");
if(result == "yes"){
    if(prop == "name"){
        Hotel.name = prompt("Enter new value for " + prop);
    }
    else if(prop == "city"){
        Hotel.city = prompt("Enter new value for " + prop);
    }
    else if(prop == "star"){
        Hotel.star = prompt("Enter new value for " + prop);
    }
    else if(prop == "add"){
        Hotel.add = prompt("Enter new value for " + prop);
    }
    else if(prop == "facilities"){
        var n = Number(prompt("how many facilities do yoy want to add?"));
        // console.log(n);
        Hotel.facilities = [] ;
        for (let i = 0; i < n ; i++) {
            Hotel.facilities[i] = prompt("Enter new value for " + prop); 
        }
    }
}
console.log(Hotel);

// (prop == "name") 
// }
// console.log(prop);
// console.log(typeof prop);
// console.log(typeof Hotel.city);
// console.log(Hotel.prop);

// console.log(Hotel. prop );
// prop = (result == "yes") ? prompt("Enter new value for " + prop) : Hotel.prop;
// console.log(Hotel.prop);
// console.log(Hotel.star);


