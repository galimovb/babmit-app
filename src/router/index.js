import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history:createWebHistory(),
    routes:[

        {
            path: '/photos',
            name: 'photos-page',
            component:() => import('../components/pages/PhotosTablePage.vue')
        },
        {
            path: '/leads',
            name: 'leads-page',
            component: () => import('../components/pages/LeadTablePage.vue')
        },

        {
            path: '/:pathMatch(.*)*',
            redirect: '/photos'
        }
    ]
})
export default router

