const getStoredEstate = ()=>{
    const storedEstate = localStorage.getItem('estate');
    if(storedEstate) {
        return JSON.parse(storedEstate)
    }
    return []
}


const addEstateToLS = id =>{
    const existingEstate = getStoredEstate();
    existingEstate.push(id);
    saveEstateToLS(existingEstate)
}

const saveEstateToLS = existingEstate =>{
    const readStringified = JSON.stringify(existingEstate)
    localStorage.setItem('estate', readStringified)
}

export {getStoredEstate, addEstateToLS, saveEstateToLS}