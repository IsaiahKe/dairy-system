var price=45;
var yearProduction=[
{"period":"January","production":1876,"days":31},
{"period":"Febuary","production":1876,"days":28},
{"period":"March","production":1876,"days":31},
{"period":"April","production":1876,"days":30},
{"period":"May","production":1876,"days":31},
{"period":"June","production":1876,"days":30},
{"period":"July","production":1876,"days":31},
{"period":"August","production":1876,"days":31},
{"period":"September","production":1876,"days":30},
{"period":"October","production":1876,"days":31},
{"period":"November","production":1876,"days":30},
{"period":"December","production":1876,"days":31},
    
];
let dailyProduction=[
    shed1={"name":"Shed A","amount": 510},
    shed2={"name":"Shed B","amount": 308}, 
    shed3={"name":"Shed C","amount":486}, 
    shed4={"name":"Shed D", "amount":572}
];
function getShed(){
    document.getElementById("headholder").innerHTML="Production per shed"
    var table = document.getElementById("data");
    table.innerHTML="";
    var tr="";
    dailyProduction.forEach(x=>{
       tr+='<tr>';
       tr+='<td>'+'Your production from '+x.name+'</td>'+'<td>'+x.amount+' liters per day'+'</td>';
       tr+='</tr>'
  
    })
    table.innerHTML+=tr;
}
function addData(){
    document.getElementById('addform').style.display='block';
    document.getElementById('price').style.display="none";
    
}
function getOut() {
    window.location.replace("index.html");
}
function getTotal(){
    document.getElementById("price").style.display="none";
    document.getElementById("addform").style.display="none";
    //document.getElementById("").style.display="";
    document.getElementById("headholder").innerHTML="Production per Year"
    var table = document.getElementById("data");
    table.innerHTML="";
    var tr="";
    yearProduction.forEach(x=>{
       tr+='<tr>';
       tr+='<td>'+'Your income for '+x.period +'</td><td>'+' KSh.'+x.production*x.days*price+'</td>';
       tr+='</tr>'
  
    })
    table.innerHTML+=tr;
}