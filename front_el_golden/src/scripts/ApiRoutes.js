const hostApi = 'localhost:8080'

export const GetApiRoutes = (endpoint)=> {
    const routes = {
        GetCategories: '/management_category/get_category',
        DeleteCategories: '/management_category/delete_category',
        SetCategory: '/management_category/set_category'
    };

    return routes[endpoint];
}