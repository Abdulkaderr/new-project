
 async function population_api_china(){
    
    let base_url ="https://world-population.p.rapidapi.com/";
    let end_point = "population";
    let url = base_url+end_point;
    let params = "?country_name=China"
    let url_params = url+params;
    const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
              'X-RapidAPI-Host': 'world-population.p.rapidapi.com'
            }
          }
    let data= await get_population_data_china(url_params,options);
    if(data==0){
        console.log("ERROR");
    }else{
       
    show_china(data);}
    
        }
    async function get_population_data_china(url,options){
        let status_code,data_population;
    
        let respons = await fetch(url,options);
        status_code=respons.status;
        
        if(status_code>=200 && status_code<300){
            data_population=await respons.json();
        }else{data_population={}}
        
    
    
    //console.log("aaa",data_population)
    return data_population;
    
    }
    function show_china(data){
          let table;
           table=`<tr>
            <th>population</th>
            <th>ranking</th>
            <th>country</th>
           `;
                 let data_country = data.body.country_name;
                 let data_population = data.body.population;
                 let data_ranking = data.body.ranking;
    
                //console.log("bbbbbbbbb",data_population.body.population);
                 
                table+=`<tr>`;
                    table+=`<td>`+ data_population+`</td>`;
                        table+=`<td>`+ data_ranking+`</td>`;
                        table+=`<td>`+  data_country+`</td>`;
                                table+=`</tr>`;
                
               document.getElementById("data").innerHTML=table; 
                 }
    
    
     async function population_api_canada(){
        
    let base_url ="https://world-population.p.rapidapi.com/";
    let end_point = "population";
    let url = base_url+end_point;
    let params = "?country_name=Canada"
    let url_params = url+params;
    const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
              'X-RapidAPI-Host': 'world-population.p.rapidapi.com'
            }
          }
    let data= await get_population_data_canada(url_params,options);
    if(data==0){
        console.log("ERROR");
    }else{
       
    show_canada(data);}
    
        }
    async function get_population_data_canada(url,options){
        let status_code,data_population;
    
        let respons = await fetch(url,options);
        status_code=respons.status;
        
        if(status_code>=200 && status_code<300){
            data_population=await respons.json();
        }else{data_population={}}
        
    
    
    //console.log("aaa",data_population)
    return data_population;
    
    }
    function show_canada(data){
          let table;
           table=`<tr>
            <th>population</th>
            <th>ranking</th>
            <th>country</th>
           `;
                 let data_country = data.body.country_name;
                 let data_population = data.body.population;
                 let data_ranking = data.body.ranking;
    
                //console.log("bbbbbbbbb",data_population.body.population);
                 
                table+=`<tr>`;
                    table+=`<td>`+ data_population+`</td>`;
                        table+=`<td>`+ data_ranking+`</td>`;
                        table+=`<td>`+  data_country+`</td>`;
                                table+=`</tr>`;
                
               document.getElementById("data").innerHTML=table; 
                 }
    
                 
    
                 async function population_api_Italy(){
        
        let base_url ="https://world-population.p.rapidapi.com/";
        let end_point = "population";
        let url = base_url+end_point;
        let params = "?country_name=Italy"
        let url_params = url+params;
        const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
                  'X-RapidAPI-Host': 'world-population.p.rapidapi.com'
                }
              }
        let data= await get_population_data_Italy(url_params,options);
        if(data==0){
            console.log("ERROR");
        }else{
           
        show_Italy(data);}
        
            }
        async function get_population_data_Italy(url,options){
            let status_code,data_population;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_population=await respons.json();
            }else{data_population={}}
            
        
        
        //console.log("aaa",data_population)
        return data_population;
        
        }
        function show_Italy(data){
              let table;
               table=`<tr>
                <th>population</th>
                <th>ranking</th>
                <th>country</th>
               `;
                     let data_country = data.body.country_name;
                     let data_population = data.body.population;
                     let data_ranking = data.body.ranking;
        
                    //console.log("bbbbbbbbb",data_population.body.population);
                     
                    table+=`<tr>`;
                        table+=`<td>`+ data_population+`</td>`;
                            table+=`<td>`+ data_ranking+`</td>`;
                            table+=`<td>`+  data_country+`</td>`;
                                    table+=`</tr>`;
                    
                   document.getElementById("data").innerHTML=table; 
                     }
        
    
                     async function population_api_japan(){
        
        let base_url ="https://world-population.p.rapidapi.com/";
        let end_point = "population";
        let url = base_url+end_point;
        let params = "?country_name=Japan"
        let url_params = url+params;
        const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
                  'X-RapidAPI-Host': 'world-population.p.rapidapi.com'
                }
              }
        let data= await get_population_data_japan(url_params,options);
        if(data==0){
            console.log("ERROR");
        }else{
           
        show_japan(data);}
        
            }
        async function get_population_data_japan(url,options){
            let status_code,data_population;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_population=await respons.json();
            }else{data_population={}}
            
        
        
        //console.log("aaa",data_population)
        return data_population;
        
        }
        function show_japan(data){
              let table;
               table=`<tr>
                <th>population</th>
                <th>ranking</th>
                <th>country</th>
               `;
                     let data_country = data.body.country_name;
                     let data_population = data.body.population;
                     let data_ranking = data.body.ranking;
        
                    //console.log("bbbbbbbbb",data_population.body.population);
                     
                    table+=`<tr>`;
                        table+=`<td>`+ data_population+`</td>`;
                            table+=`<td>`+ data_ranking+`</td>`;
                            table+=`<td>`+  data_country+`</td>`;
                                    table+=`</tr>`;
                    
                   document.getElementById("data").innerHTML=table; 
                     }
    