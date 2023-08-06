import axioss from "axios";
let baseURL = 'https://ecommerceserver-fuba.onrender.com';
//baseURL=http://localhost:8080
//baseURL=https://ecommerceserver-fuba.onrender.com
export const axios = axioss.create(
    {
        baseURL
    }
);