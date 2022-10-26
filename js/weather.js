
 async function weather_api_canada(){
    
    let base_url ="https://visual-crossing-weather.p.rapidapi.com/";
    let end_point = "forecast";
    let url = base_url+end_point;
    let params = "?aggregateHours=24&contentType=json&shortColumnNames=0&location=Ottawa"
    let url_params = url+params;
    let options = {
            method: 'GET',
        headers: {
                'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
    }
    let data= await get_weather_data_canada(url_params,options);
    if(data==0){
        window.alert("Error:404");
    }else{
       
    show_canada(data);}
    
        }
    async function get_weather_data_canada(url,options){
        let status_code,data_weather;
    
        let respons = await fetch(url,options);
        status_code=respons.status;
        
        if(status_code>=200 && status_code<300){
            data_weather=await respons.json();
        }else{data_weather={}}
        
    
    
    //console.log("aaa",data_weather)
    return data_weather;
    
    }
    function show_canada(data){
          let table;
           table=`<tr>
            <th>Data TIME</th>
            <th>Temp</th>
            <th>Humidity</th>
            <th>visibility</th>`;
                 let data_weather = data.locations.Ottawa.values;
                 let len= data_weather.length;
    
                    for(let i=0;i<len;i++){
                    console.log(data_weather[i].datetimeStr);
                table+=`<tr>`;
                    table+=`<td>`+ data_weather[i].datetimeStr+`</td>`;
                        table+=`<td>`+ data_weather[i].temp+`</td>`;
                            table+=`<td>`+ data_weather[i].humidity+`</td>`;
                            table+=`<td>`+ data_weather[i].visibility+`</td>`;
                                table+=`</tr>`;
                }
                document.getElementById("data").innerHTML=table; 
                 }
    
    
                 
    
    
    
                 async function weather_api_china(){
        
        let base_url ="https://visual-crossing-weather.p.rapidapi.com/";
        let end_point = "forecast";
        let url = base_url+end_point;
        //let params = "?aggregateHours=24&location=Washington&contentType=json";
        let params = "?aggregateHours=24&contentType=json&shortColumnNames=0&location=Beijing"
        let url_params = url+params;
        let options = {
                method: 'GET',
            headers: {
                    'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
                    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
                }
        }
        let data= await get_weather_data_china(url_params,options);
        if(data==0){
            window.alert("Error:404");
        }else{
            //console.log("yyeaaaaaaaaa");
        show_china(data);}
        
            }
        async function get_weather_data_china(url,options){
            let status_code,data_weather;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_weather=await respons.json();
            }else{data_weather={}}
            
        
        
        console.log("aaa",data_weather)
        return data_weather;
        
        }
        function show_china(data){
              let table;
               table=`<tr>
                <th>Data TIME</th>
                <th>Temp</th>
                <th>Humidity</th>
                <th>visibility</th>`;
                     let data_weather = data.locations.Beijing.values;
                     let len= data_weather.length;
                        for(let i=0;i<len;i++){
                        console.log(data_weather[i].datetimeStr);
                    table+=`<tr>`;
                        table+=`<td>`+ data_weather[i].datetimeStr+`</td>`;
                            table+=`<td>`+ data_weather[i].temp+`</td>`;
                                table+=`<td>`+ data_weather[i].humidity+`</td>`;
                                table+=`<td>`+ data_weather[i].visibility+`</td>`;
                                    table+=`</tr>`;
                    }
                    document.getElementById("data").innerHTML=table; 
                     }
        
        
    
    
    
    
                     async function weather_api_italy(){
        
        let base_url ="https://visual-crossing-weather.p.rapidapi.com/";
        let end_point = "forecast";
        let url = base_url+end_point;
        //let params = "?aggregateHours=24&location=Washington&contentType=json";
        let params = "?aggregateHours=24&contentType=json&shortColumnNames=0&location=Rome"
        let url_params = url+params;
        let options = {
                method: 'GET',
            headers: {
                    'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
                    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
                }
        }
        let data= await get_weather_data_italy(url_params,options);
        if(data==0){
            window.alert("Error:404");
        }else{
          
        show_italy(data);}
        
            }
        async function get_weather_data_italy(url,options){
            let status_code,data_weather;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_weather=await respons.json();
            }else{data_weather={}}
            
        
        
        console.log("aaa",data_weather)
        return data_weather;
        
        }
        function show_italy(data){
              let table;
               table=`<tr>
                <th>Data TIME</th>
                <th>Temp</th>
                <th>Humidity</th>
                <th>visibility</th>`;
                     let data_weather = data.locations.Rome.values;
                     let len= data_weather.length;
                        for(let i=0;i<len;i++){
                        console.log(data_weather[i].datetimeStr);
                    table+=`<tr>`;
                        table+=`<td>`+ data_weather[i].datetimeStr+`</td>`;
                            table+=`<td>`+ data_weather[i].temp+`</td>`;
                                table+=`<td>`+ data_weather[i].humidity+`</td>`;
                                table+=`<td>`+ data_weather[i].visibility+`</td>`;
                                    table+=`</tr>`;
                    }
                    document.getElementById("data").innerHTML=table; 
                     }
        
        
        
                     async function weather_api_japan(){
        
        let base_url ="https://visual-crossing-weather.p.rapidapi.com/";
        let end_point = "forecast";
        let url = base_url+end_point;
        //let params = "?aggregateHours=24&location=Washington&contentType=json";
        let params = "?aggregateHours=24&contentType=json&shortColumnNames=0&location=Tokyo"
        let url_params = url+params;
        let options = {
                method: 'GET',
            headers: {
                    'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
                    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
                }
        }
        let data= await get_weather_data_japan(url_params,options);
        if(data==0){
            window.alert("Error:404");
        }else{
          
        show_japan(data);}
        
            }
        async function get_weather_data_japan(url,options){
            let status_code,data_weather;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_weather=await respons.json();
            }else{data_weather={}}
            
        
        
        console.log("aaa",data_weather)
        return data_weather;
        
        }
        function show_japan(data){
              let table;
               table=`<tr>
                <th>Data TIME</th>
                <th>Temp</th>
                <th>Humidity</th>
                <th>visibility</th>`;
                     let data_weather = data.locations.Tokyo.values;
                     let len= data_weather.length;
                        for(let i=0;i<len;i++){
                        console.log(data_weather[i].datetimeStr);
                    table+=`<tr>`;
                        table+=`<td>`+ data_weather[i].datetimeStr+`</td>`;
                            table+=`<td>`+ data_weather[i].temp+`</td>`;
                                table+=`<td>`+ data_weather[i].humidity+`</td>`;
                                table+=`<td>`+ data_weather[i].visibility+`</td>`;
                                    table+=`</tr>`;
                    }
                    document.getElementById("data").innerHTML=table; 
                     }