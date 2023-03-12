
// ==========  Add to item ================
export const ADD =(item)=>{
    return{
        type: "ADD_CART",
        payload: item
    }
}


//============= remove individual iteam ============

export const REMOVE = (id) => {
    return {
        type: "RMV_ONE",
        payload: id
    }
}

// =============== Search product =========

export const productSearch = (query) => {
    return {
        type: " SEARCH_PRO",
        payload: query
    }
}