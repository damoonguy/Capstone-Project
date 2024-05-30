const url = "http://localhost:5000/api/categories/";

const createCategory = async (category) => { // will I need the use the category.id?
    
    try {
        const data = await fetch(url,
            { 
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: category
            }
        );
        const categoriesApiData = await data.json();
        console.log(categoriesApiData.message);
        return categoriesApiData.data;
    } catch (err) {
        console.log("err");
        throw new Error(err);
    }
};

const fetchCategories = async () => {
    console.log("HELP SERVICE");
    
    try {
        const data = await fetch(url,
            { 
                method: "GET", 
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const categoriesApiData = await data.json();
        console.log(categoriesApiData.message);
        return categoriesApiData.data;
    } catch (err) {
        console.log("err");
        throw new Error(err);
    }
};

const updateCategory = async (category) => {
    
    try {
        const data = await fetch(url + category.id,
            { 
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: category
            }
        );
        const categoriesApiData = await data.json();
        console.log(categoriesApiData.message);
        return categoriesApiData.data;
    } catch (err) {
        console.log("err");
        throw new Error(err);
    }
};

const deleteCategoryById = async (categoryId) => {
    
    try {
        const data = await fetch(url + categoryId,
            { 
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const categoriesApiData = await data.json();
        console.log(categoriesApiData.message);
        return categoriesApiData.data;
    } catch (err) {
        console.log("err");
        throw new Error(err);
    }
};


const categoriesService = {
    createCategory,
    fetchCategories,
    updateCategory,
    deleteCategoryById

};

export default categoriesService;