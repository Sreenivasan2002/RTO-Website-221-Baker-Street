function findOwners() {
    var car = document.getElementById("car").value;
    // var car2 = document.getElementById("car2").value;
  
    var owners = {
      "UP-32FJ-7010": "Dr. Pal, Gomtinagar, Lucknow, 226016",
      //"KA-01M-0954": "krishna dev, Karnataka, banguluru"
    };
  
    var owner1 = owners[car.toUpperCase()];
    // var owner2 = owners[car2.toUpperCase()];
  
    var result = document.getElementById("result");
  
   if (car=="UP-32FJ-7010") {
      result.innerHTML = "<br>Car  owner: " + owner1;
    } else if (car=="KA-01M-0954") {
      result.innerHTML = "Invalid car registration numbers";
    } else {
      result.innerHTML = "Invalid car registration numbers";
    }
  }
  
