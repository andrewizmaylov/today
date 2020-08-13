export const routes = [
	{path: '/bigMenu', name: 'menufullscreen', component: () => import(/* webpackChunkName: "menufullscreen"*/ "./components/menufullscreen.vue"), meta: {requiresAuth: false} },
	{path: '/home', name: 'home', component: () => import(/* webpackChunkName: "home"*/ "./components/home.vue"), meta: {requiresAuth: false} },
	{path: '/meal', name: 'meal', component: () => import(/* webpackChunkName: "meal"*/ "./components/meal.vue"), meta: {requiresAuth: true} },
	{path: '/cook', name: 'cook', component: () => import(/* webpackChunkName: "cook"*/ "./components/meal/cook.vue"), meta: {requiresAuth: true} },
	{path: '/cooks', name: 'cooks', component: () => import(/* webpackChunkName: "cooks"*/ "./components/meal/cooks.vue"), meta: {requiresAuth: true} },
	{path: '/user', name: 'user', component: () => import(/* webpackChunkName: "user"*/ "./components/user.vue"), meta: {requiresAuth: false} },
	{path: '/account/info', name: 'accountinfo', component: () => import(/* webpackChunkName: "accountinfo"*/ "./components/account/info.vue"), meta: {requiresAuth: true} },
	{path: '/userdocs', name: 'userdocs', component: () => import(/* webpackChunkName: "userdocs"*/ "./components/userdocs.vue"), meta: {requiresAuth: false} },
	{path: '/usertasks', name: 'usertasks', component: () => import(/* webpackChunkName: "usertasks"*/ "./components/usertasks.vue"), meta: {requiresAuth: false} },
	{path: '/news', name: 'news', component: () => import(/* webpackChunkName: "news"*/ "./components/news.vue"), meta: {requiresAuth: true} },
	{path: '/news/item', name: 'newsitem', component: () => import(/* webpackChunkName: "NewsTopic"*/ "./components/newstopic.vue"), meta: {requiresAuth: true} },
	{path: '/air', name: 'air', component: () => import(/* webpackChunkName: "air"*/ "./components/air.vue"), meta: {requiresAuth: true} },
	{path: '/places', name: 'places', component: () => import(/* webpackChunkName: "places"*/ "./components/places.vue"), meta: {requiresAuth: true} },
	{path: '/departments', name: 'departments', component: () => import(/* webpackChunkName: "departments"*/ "./components/departments.vue"), meta: {requiresAuth: false} },
	{path: '/staff', name: 'staff', component: () => import(/* webpackChunkName: "staff"*/ "./components/staff.vue"), meta: {requiresAuth: false} },
	{path: '/schedule', name: 'schedule', component: () => import(/* webpackChunkName: "schedule"*/ "./components/schedule.vue"), meta: {requiresAuth: false} },
	{path: '/docs', name: 'docs', component: () => import(/* webpackChunkName: "docs"*/ "./components/docs.vue"), meta: {requiresAuth: false} },
	{path: '/videos', name: 'videos', component: () => import(/* webpackChunkName: "videos"*/ "./components/videos.vue"), meta: {requiresAuth: false} },
	{path: '/information', name: 'information', component: () => import(/* webpackChunkName: "information"*/ "./components/information.vue"), meta: {requiresAuth: false} },
	{path: '/auth', name: 'auth', component: () => import(/* webpackChunkName: "auth"*/ "./components/auth.vue"), meta: {requiresAuth: false} },
	{path: '/login', name: 'login', component: () => import(/* webpackChunkName: "login"*/ "./components/auth/login.vue"), meta: {requiresAuth: false} },
	{path: '/registration', name: 'registration', component: () => import(/* webpackChunkName: "registration"*/ "./components/auth/registration.vue"), meta: {requiresAuth: false} },
	{path: '/*', name: 'notfound', component: () => import(/* webpackChunkName: "notfound"*/ "./components/notfound.vue"), meta: {requiresAuth: false} },
]

