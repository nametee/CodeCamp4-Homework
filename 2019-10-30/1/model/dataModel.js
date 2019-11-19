const axios = require('axios')

const get = (id) =>{   
    return axios.get('https://reqres.in/api/users/'+id,{ Authorization: 'Bearer someToken' } )
        .then((response)=>{   
            return { data : response.data.data ,status : response.status}
        })
        .catch(err => {  
            return { data : {},status : err.response.status}
        })  
}

const add = (userName,userJob) =>{
    return axios.post('https://reqres.in/api/users',
        {name :userName , job: userJob }
    ).then(response => {
        return { data : response.data.data ,status : response.status,statusText :response.statusText }
    }).catch(err => {  
        return { data : {},status : err.response.status}
    })   
}

const update = (id,userName,userJob) =>{
    return axios.post('https://reqres.in/api/users/'+id,
        {name :userName , job: userJob }
    ).then(response => { 
        return {data : response.data.data ,status:response.status , statusText:response.statusText}
    }).catch(err=>{
        return { data : {},status : err.response.status}
    })
    
}

const remove = (id) =>{
    return axios.delete('https://reqres.in/api/users/'+id).then(response => { 
        return {data : response.data.data ,status:response.status , statusText:response.statusText}
    }).catch(err=>{
        return { data : {},status : err.response.status}
    }) 
}

module.exports = {
    get,add,update,remove 
}