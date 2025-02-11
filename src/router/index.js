import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NoFoundView from "@/views/NoFoundView.vue";
import JobView from "@/components/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobVieuw from "@/views/EditJobVieuw.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/jobs",
            name: "jobs",
            component: JobsView,
        },
        {
            path: "/jobs/:id",
            name: "job",
            component: JobView,
        },
        {
            path: "/jobs/add",
            name: "add-job",
            component: AddJobView,
        },
        {
            path: "/jobs/edit/:id",
            name: "edit-job",
            component: EditJobVieuw,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NoFoundView,
        },
    ],
});

export default router;
