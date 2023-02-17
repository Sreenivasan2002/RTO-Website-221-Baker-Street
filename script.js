function findOwners() {
    var car = document.getElementById("car").value;
    // var car2 = document.getElementById("car2").value;
  
    var owners = {
      "KL-48B-2610": "SREENIVASAN S, Thrissur, Kerala",
      "KA-01M-0954": "krishna dev, Karnataka, banguluru"
    };
  
    var owner1 = owners[car.toUpperCase()];
    // var owner2 = owners[car2.toUpperCase()];
  
    var result = document.getElementById("result");
  
   if (car=="KL-48B-2610") {
      result.innerHTML = "<br>Car  owner: " + owner1;
    } else if (car=="KA-01M-0954") {
      result.innerHTML = "<br>Car 2 owner: " + owner1;
    } else {
      result.innerHTML = "Invalid car registration numbers";
    }
  }
  