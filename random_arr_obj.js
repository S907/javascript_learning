// Just some modifications with array, array of objects and others

var data = [
    {
    "errorCode":100,
    "message":{},
    "name":"InternetGatewayDevice.LANDevice.1.Hosts.HostNumberOfEntries",
    "value":"2"
    }
  ];
  // console.log(data[0].value); //Array of objects

  var data_one = 
    {
    errorCode:100,
    message:{},
    name:["InternetGatewayDevice","LANDevice",1,"Hosts","HostNumberOfEntries"],
    value:"2"
    }
  ;
  // console.log(data_one.name[0]); // Normal objects

  var data_one_one = 
  [{
  errorCode:100,
  message:[1,2,3,"Array"],
  name:["InternetGatewayDevice","LANDevice",1,"Hosts","HostNumberOfEntries"],
  value:"2"
  }
];
// console.log();
//------------------------------------------------------------------------------------------

var arrNew = [1,2,3,
{name:'Sammy',
title:'Elder',
bestgame:'Brawlhalla',
Rollno:2}
];

console.log(arrNew[3]);
console.log(arrNew[3].Rollno);


var arrOfObjects= {
  // Object
  bar:['Monster', 'Energy' , 'Drink']
}

//arrOfObjects.bar[0]= 'Souvik';
// console.log(arrOfObjects);
// console.log(arrOfObjects.bar[0]);


