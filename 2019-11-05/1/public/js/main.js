const getBoat = ()=>{
    axios.get('http://localhost:3000/boats/')
    .then((response)=>{
        console.log(response.data);
        alert(JSON.stringify(response.data));
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const getBoatByID = ()=>{
    const id = document.getElementById('boatID').value;
    axios.get('http://localhost:3000/boats/id/' + id )
    .then((response)=>{
        console.log(response.data);
        alert(JSON.stringify(response.data));
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const getBoatByName = ()=>{
    const name = document.getElementById('boatName').value;
    axios.get('http://localhost:3000/boats/name/' + name )
    .then((response)=>{
        console.log(response.data);
        alert(JSON.stringify(response.data));
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const getBoatByColor = ()=>{
    const color = document.getElementById('boatColor').value;
    axios.get('http://localhost:3000/boats/color/' + color )
    .then((response)=>{
        console.log(response.data);
        alert(JSON.stringify(response.data));
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const getBoatByParams = ()=>{
    const name = document.getElementById('boatName').value;
    const color = document.getElementById('boatColor').value;
    axios.get('http://localhost:3000/boats/name/' + name + '/color/' + color )
    .then((response)=>{
        console.log(response.data);
        alert(JSON.stringify(response.data));
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const addBoat = ()=>{
    const data = {
        id : document.getElementById('boatID').value,
        name : document.getElementById('boatName').value,
        color : document.getElementById('boatColor').value
    } 
    axios.post('http://localhost:3000/boats/',data)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const updateBoat = ()=>{
    const data = {
        id : document.getElementById('boatID').value,
        name : document.getElementById('boatName').value,
        color : document.getElementById('boatColor').value
    } 
    axios.patch('http://localhost:3000/boats/'+document.getElementById('boatID').value,data)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
} 
const replaceBoat = ()=>{
    const data = {
        id : document.getElementById('boatID').value,
        name : document.getElementById('boatName').value,
        color : document.getElementById('boatColor').value
    } 
    axios.put('http://localhost:3000/boats/'+document.getElementById('boatID').value,data)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const removeBoat = ()=>{ 
    axios.delete('http://localhost:3000/boats/'+document.getElementById('boatID').value)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}

const getSailor = ()=>{ 
    axios.get('http://localhost:3000/sailors/')
    .then((response)=>{
        console.log(response.data);
        alert(JSON.stringify(response.data));
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const addSailor = ()=>{
    const data = {
        id : document.getElementById('sailorID').value,
        name : document.getElementById('sailorName').value,
        rating : document.getElementById('sailorRating').value,
        age : document.getElementById('sailorAge').value
    } 
    axios.post('http://localhost:3000/sailors/',data)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
} 
const updateSailor = ()=>{
    const data = {
        id : document.getElementById('sailorID').value,
        name : document.getElementById('sailorName').value,
        rating : document.getElementById('sailorRating').value,
        age : document.getElementById('sailorAge').value
    } 
    axios.patch('http://localhost:3000/sailors/'+document.getElementById('sailorID').value,data)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const replaceSailor = ()=>{ 
    const data = {
        id : document.getElementById('sailorID').value,
        name : document.getElementById('sailorName').value,
        rating : document.getElementById('sailorRating').value,
        age : document.getElementById('sailorAge').value
    } 
    axios.put('http://localhost:3000/sailors/'+document.getElementById('sailorID').value,data)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const removeSailor = ()=>{ 
    axios.delete('http://localhost:3000/sailors/'+document.getElementById('sailorID').value)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}

const getReserve = ()=>{ 
    axios.get('http://localhost:3000/reserves/')
    .then((response)=>{
        console.log(response.data);
        alert(JSON.stringify(response.data));
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const addReserve = ()=>{
    const data = {
        sailorID : document.getElementById('sailorID').value,
        boatID : document.getElementById('boatID').value,
        day : document.getElementById('day').value 
    } 
    console.log(data.day);
    axios.post('http://localhost:3000/reserves/',data)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
} 
const updateReserve = ()=>{
    const data = {
        sailorID : document.getElementById('sailorID').value,
        boatID : document.getElementById('boatID').value,
        day : document.getElementById('day').value 
    } 
    axios.patch('http://localhost:3000/reserves/' + document.getElementById('sailorID').value + '/' +document.getElementById('boatID').value ,data)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const replaceReserve = ()=>{ 
    const data = {
        sailorID : document.getElementById('sailorID').value,
        boatID : document.getElementById('boatID').value,
        day : document.getElementById('day').value 
    } 
    axios.put('http://localhost:3000/reserves/'+ document.getElementById('sailorID').value + '/' +document.getElementById('boatID').value,data)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}
const removeReserve = ()=>{ 
    axios.delete('http://localhost:3000/reserves/'+document.getElementById('sailorID').value + '/'+ document.getElementById('boatID').value)
    .then((response)=>{
        console.log(response.data);
        alert(response.data);
    })
    .catch((err)=>{
        console.log(err);
        alert(err);
    });
}