const BASE_URL = 'http://localhost:3000';

export const CAT_URL = BASE_URL + '/api/categories';
export const PAR_CAT_URL = BASE_URL + '/api/categories/parent';

export const PRODUCTS_URL = BASE_URL + '/api/products';
export const PRODUCT_CATEGORY = BASE_URL + '/api/products/category';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';

export const NEW_PRODUCTS_URL = '';
export const DEL_PRODUCTS_URL = '';