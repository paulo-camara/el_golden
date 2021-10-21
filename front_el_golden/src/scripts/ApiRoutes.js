export const GetApiRoutes = (endpoint)=> {
    const routes = {
        GetCategories: '/management_category/get_category',
        DeleteCategory: '/management_category/delete_category',
        SetCategory: '/management_category/set_category',
        GetDevices: '/management_device/get_device',
        DeleteDevice: '/management_device/delete_device',
        SetDevice: '/management_device/set_device'
    };

    return routes[endpoint];
}