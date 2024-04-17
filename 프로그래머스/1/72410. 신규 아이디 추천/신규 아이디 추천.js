
function remove(inputString) {
    const regex = /[^a-z0-9.\-_]/g;
    return inputString.replace(regex, '');
}

function removeDot(inputString){
    const regex = /[.]+[.]/g;
    return inputString.replace(regex, '.');
}

function solution(new_id) {
    
    // const n = parseInt(new_id.length);
    
    
    
    new_id = new_id.toLowerCase();
    
    new_id = remove(new_id);
    
    new_id = removeDot(new_id);
    
    if(new_id[0]==='.'){
        new_id = new_id.split('');
        
        new_id.splice(0,1);
        new_id = new_id.join('');
    }
    
    if(new_id[new_id.length]==='.'){
        new_id = new_id.split('');
        
        new_id.splice(0,1);
        new_id = new_id.join('');
    }
    
    
    if(new_id===''){
        new_id = 'a';
    }
    
    if(new_id.length>15){
        new_id = new_id.slice(0,15);
    }

    if(new_id[0]==='.'){
        new_id = new_id.split('');
        
        new_id.splice(0,1);
        new_id = new_id.join('');
    }
    
    if(new_id[new_id.length-1]==='.'){
        new_id = new_id.split('');
        
        new_id.splice(new_id.length-1,1);
        new_id = new_id.join('');
    }
    
    
    while(new_id.length<3){
        new_id = new_id+new_id[new_id.length-1];
    }

    
    return new_id;
    
}