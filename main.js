/*function loadJson(file,callback)
{
var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function()
{
    if(xhr.readyState===4 && xhr.status=="200")
    { callback(xhr.responseText);}
    
};
 xhr.send(null);

}

loadJson("data.json",function(text)
{
let data=JSON.parse(text);
console.log(data);
basic(data.details);
careerinfo(data.carrerobjective);
education(data.educationqualification);
technical(data.tecniclskills);

})*/


function loadJson(file){
    return new Promise((resolve,reject)=>{
        return fetch(file).then(response=>{
            if(response.ok){
                resolve(response.json());
            }

            else{
                 reject(new Error('erropr'));
            }
        })
    })
}



var newfile =loadJson("data.json");
newfile.then(data=>{
  console.log(data);
  basic(data.details);
  careerinfo(data.carrerobjective);
  education(data.educationqualification);
  technical(data.tecniclskills);
})

var child1 = document.querySelector(".child1");

function basic(det)
{
    var img1 = document.createElement("img");
    img1.src=det.image;
    child1.appendChild(img1);

    var name = document.createElement("h4");
    name.textContent= det.name;
    child1.appendChild(name);
    
    var email =document.createElement("a");
    email.href="mailto:sai.l18.cse@anits.edu.in";
    email.textContent=det.email;
    child1.appendChild(email);

    var number =document.createElement("h4");
    number.textContent=det.number;
    child1.appendChild(number);

    var address =document.createElement("h4");
    address.textContent=det.address;
    child1.appendChild(address);

    var add = document.createElement("h3");
    add.textContent="Address";
    child1.appendChild(add);

  child1.appendChild(document.createElement("hr"));
  var address =document.createElement("h1");
    address.textContent=det.address;
    child1.appendChild(address)





}


var child2 = document.querySelector(".child2");

function careerinfo(info)
{
    var heading=document.createElement("h3");
    heading.textContent="career objective";
    child2.appendChild(heading);
   
    child2.appendChild(document.createElement("hr"));

    var heading2=document.createElement("p");
    heading2.textContent=info.info1;
     child2.appendChild(heading2);



}


function education(edu)
{
    var heading3=document.createElement("h3");
    heading3.textContent="EDUCATION QUALIFICATION";
     child2.appendChild(heading3);

     child2.appendChild(document.createElement("hr"));

     var table1 = document.createElement("table");
     table1.border="2";
     child2.appendChild(table1);

     tabledata="";
     for(var i=0;i<edu.length;i++)
     {
         tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>"

     }
     
     table1.innerHTML=tabledata;
 
}


function technical(tech)
{
    var heading4=document.createElement("h3");
    heading4.textContent="TECHNICAL SKILLS";
     child2.appendChild(heading4);
     
     child2.appendChild(document.createElement("hr"));

    for(i=0;i<tech.length;i++)
    {
        var title=document.createElement("h4");
        title.textContent=tech[i].title;
        child2.appendChild(title);

        var  skul=document.createElement("ul");
        var skli = document.createElement("li");
        skli.textContent=tech[i].info;
        skul.appendChild(skli);

        child2.appendChild(skul);
    }

}