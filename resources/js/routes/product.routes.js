import AllProduct from '../components/Products/AllProduct.vue';
import CreateProduct from '../components/Products/CreateProduct.vue';
import EditProduct from '../components/Products/EditProduct.vue';

export default [
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    }
];
