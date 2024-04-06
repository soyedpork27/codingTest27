function solution(survey, choices) {
    
    let R = 0;
    
    let C = 0;
    
    let J = 0;
    
    let A = 0;
    
    
    
    survey.forEach((i,idx) => {
        const target = i[0];
        
        choices[idx] = -(choices[idx]-4);
        
        if(target==="R"||target==="T"){
            
            if(target==="R"){
                R = R+choices[idx];
            }else{
                R = R-choices[idx]
            }
            
            return ;
        }
        
        if(target==="C"||target==="F"){
            
            if(target==="C"){
                C = C+choices[idx];
            }else{
                C = C-choices[idx]
            }
            
            return ;
        }
        
        if(target==="J"||target==="M"){
            
            if(target==="J"){
                J = J+choices[idx];
            }else{
                J = J-choices[idx]
            }
            
            return ;
        }
        
        if(target==="A"||target==="N"){
            
            if(target==="A"){
                A = A+choices[idx];
            }else{
                A = A-choices[idx]
            }
            
            return ;
        }
        
    });
    
    
    console.log(R,C,J,A)
    
    return `${R>=0?"R":"T"}${C>=0?"C":"F"}${J>=0?"J":"M"}${A>=0?"A":"N"}`
    
}