
// 目前的所有需要动态的路由
const dynamicRoutes = [
    {
        path: "/order",
        type: "order",
        component: () => import("@/views/admin/order.vue"),
        name: "order-manage",
        meta: {
            name: "权限路由1",
            icon: "el-icon-place",
        },
        children: [
             
            {
                path: "list",
                name: "order-list",
                type: "orderList",
                component: () => import("@/views/admin/orderList.vue"),
                meta: {
                    name: "订单列表",
                    icon: "el-icon-place",
                },
            },
            {
                path: "product",
                name: "product-manage",
                type: "production",
                component: () => import("@/views/admin/production.vue"),
                meta: {
                    name: "生产管理",
                    icon: "el-icon-place",
                },
                children: [
                    {
                        path: "list",
                        name: "product-list",
                        type: "productionList",
                        component: () =>
                            import("@/views/admin/productionList.vue"),
                        meta: {
                            name: "生产列表",
                            icon: "el-icon-place",
                        },
                    },
                    {
                        path: "review",
                        name: "review-manage",
                        component: () => import("@/views/admin/order.vue"),
                        meta: {
                            name: "审核管理",
                            icon: "el-icon-place",
                        },
                    },
                ],
            },
            {
                path: "returnGoods",
                name: "return-goods",
                component: () => import("@/views/admin/order.vue"),
                meta: {
                    name: "退货管理",
                    icon: "el-icon-place",
                },
            },
        ],
    },
    {
        path: "goods",
        component: () => import("@/views/admin/cproduct.vue"),
        name: "goods",
        type: "cproduct",
        meta: {
            name: "权限路由2",

            icon: "el-icon-place",
        },
        children: [
            {
                path: "list",
                name: "goods-list",
                type:"cproductList", 
                component: () => import("@/views/admin/cproductList.vue"),
                meta: {
                    name: "产品列表",
                    icon: "el-icon-place",
                },
            },
            {
                path: "classify",
                name: "goods-classify",
                component: () => import("@/views/admin/order.vue"),
                meta: {
                    name: "产品分类",
                    icon: "el-icon-place",
                },
            },
        ],
    },
    {
        path: "list",
        name: "statistics-list",
        type:"statistics",
        component: () => import("@/views/admin/statistics.vue"),
        meta: {
            name: "权限路由3",
            icon: "el-icon-place",
        },
    },
];
export default dynamicRoutes;
