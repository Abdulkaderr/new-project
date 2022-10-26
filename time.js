  

    async function api_time_berlin(){
        let url="https://world-time2.p.rapidapi.com/timezone/Europe/Berlin";

let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
		'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
	}
}

let data = await get_time(url,options);
if(data==0){
        window.alert("Error:404");
    }else{
       
    show_time(data);}
    
        
}
    
        async function get_time(url,options){
            let  status_code,time_json;
let respons = await fetch(url,options);
status_code=respons.status;

if(status_code>=200 && status_code<300){
     time_json = await respons.json();
        }else{time_json={}}

 
  
    

console.log("aaa",time_json)

return time_json;

}


function show_time(data){

    let table;
    let time_json = data;

    console.log(data.datetime);
          
           table=`<tr>
            <th>datetime</th>
            <th>day_of_week</th>
            <th>day_of_year</th>
            <th>timezone</th>
            <th>week_number</th>`;
        
     
                   
     let datetime = data.datetime;
                 let day_of_week = data.day_of_week;
                 
                 let day_of_year = data.day_of_year;
                 let timezone = data.timezone;
                 let week_number = data.week_number;

                 
                table+=`<tr>`;
                    table+=`<td>`+ datetime+`</td>`;
                        table+=`<td>`+ day_of_week+`</td>`;
                            table+=`<td>`+ day_of_year+`</td>`;
                            table+=`<td>`+ timezone+`</td>`;
                            table+=`<td>`+ week_number+`</td>`;
                                table+=`</tr>`;
                             
           
                document.getElementById("data").innerHTML=table; 
                }














                
    async function api_time_london(){
        let url="https://world-time2.p.rapidapi.com/timezone/Europe/London";

let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
		'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
	}
}

let data = await get_time(url,options);
if(data==0){
        window.alert("Error:404");
    }else{
       
    show_time(data);}
    
        
}
    
        async function get_time(url,options){
            let  status_code,time_json;
let respons = await fetch(url,options);
status_code=respons.status;

if(status_code>=200 && status_code<300){
     time_json = await respons.json();
        }else{time_json={}}

 
  
    

console.log("aaa",time_json)

return time_json;

}


function show_time(data){

    let table;
    let time_json = data;

    console.log(data.datetime);
          
           table=`<tr>
            <th>datetime</th>
            <th>day_of_week</th>
            <th>day_of_year</th>
            <th>timezone</th>
            <th>week_number</th>`;
        
     
                   
     let datetime = data.datetime;
                 let day_of_week = data.day_of_week;
                 
                 let day_of_year = data.day_of_year;
                 let timezone = data.timezone;
                 let week_number = data.week_number;

                 
                table+=`<tr>`;
                    table+=`<td>`+ datetime+`</td>`;
                        table+=`<td>`+ day_of_week+`</td>`;
                            table+=`<td>`+ day_of_year+`</td>`;
                            table+=`<td>`+ timezone+`</td>`;
                            table+=`<td>`+ week_number+`</td>`;
                                table+=`</tr>`;
                             
           
                document.getElementById("data").innerHTML=table; 
                }









                

                
    async function api_time_Paris(){
        let url="https://world-time2.p.rapidapi.com/timezone/Europe/Paris";

let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
		'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
	}
}

let data = await get_time(url,options);
if(data==0){
        window.alert("Error:404");
    }else{
       
    show_time(data);}
    
        
}
    
        async function get_time(url,options){
            let  status_code,time_json;
let respons = await fetch(url,options);
status_code=respons.status;

if(status_code>=200 && status_code<300){
     time_json = await respons.json();
        }else{time_json={}}

 
  
    

console.log("aaa",time_json)

return time_json;

}


function show_time(data){

    let table;
    let time_json = data;

    console.log(data.datetime);
          
           table=`<tr>
            <th>datetime</th>
            <th>day_of_week</th>
            <th>day_of_year</th>
            <th>timezone</th>
            <th>week_number</th>`;
        
     
                   
     let datetime = data.datetime;
                 let day_of_week = data.day_of_week;
                 
                 let day_of_year = data.day_of_year;
                 let timezone = data.timezone;
                 let week_number = data.week_number;

                 
                table+=`<tr>`;
                    table+=`<td>`+ datetime+`</td>`;
                        table+=`<td>`+ day_of_week+`</td>`;
                            table+=`<td>`+ day_of_year+`</td>`;
                            table+=`<td>`+ timezone+`</td>`;
                            table+=`<td>`+ week_number+`</td>`;
                                table+=`</tr>`;
                             
           
                document.getElementById("data").innerHTML=table; 
                }









                
                
    async function api_time_amsterdam(){
        let url="https://world-time2.p.rapidapi.com/timezone/Europe/Amsterdam";

let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
		'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
	}
}

let data = await get_time(url,options);
if(data==0){
        window.alert("Error:404");
    }else{
       
    show_time(data);}
    
        
}
    
        async function get_time(url,options){
            let  status_code,time_json;
let respons = await fetch(url,options);
status_code=respons.status;

if(status_code>=200 && status_code<300){
     time_json = await respons.json();
        }else{time_json={}}

 
  
    

console.log("aaa",time_json)

return time_json;

}


function show_time(data){

    let table;
    let time_json = data;

    console.log(data.datetime);
          
           table=`<tr>
            <th>datetime</th>
            <th>day_of_week</th>
            <th>day_of_year</th>
            <th>timezone</th>
            <th>week_number</th>`;
        
     
                   
     let datetime = data.datetime;
                 let day_of_week = data.day_of_week;
                 
                 let day_of_year = data.day_of_year;
                 let timezone = data.timezone;
                 let week_number = data.week_number;

                 
                table+=`<tr>`;
                    table+=`<td>`+ datetime+`</td>`;
                        table+=`<td>`+ day_of_week+`</td>`;
                            table+=`<td>`+ day_of_year+`</td>`;
                            table+=`<td>`+ timezone+`</td>`;
                            table+=`<td>`+ week_number+`</td>`;
                                table+=`</tr>`;
                             
           
                document.getElementById("data").innerHTML=table; 
                }