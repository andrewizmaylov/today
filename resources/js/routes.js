import bigMenu from './components/menufullscreen.vue';
import Home from './components/home.vue';
import User from './components/user.vue';
import UserDocs from './components/userdocs.vue';
import UserTasks from './components/usertasks.vue';
import News from './components/news.vue';
import NewsTopic from './components/newstopic.vue';
import Air from './components/air.vue';
import Places from './components/places.vue';
import Departments from './components/departments.vue';
import Staff from './components/staff.vue';
import Schedule from './components/schedule.vue';
import Docs from './components/docs.vue';
import Videos from './components/videos.vue';
import Info from './components/info.vue';

export const routes = [
	{path: '/bigMenu', component: bigMenu},
	{path: '/home', component: Home},
	{path: '/user', component: User},
	{path: '/user/docs', component: UserDocs},
	{path: '/user/tasks', component: UserTasks},
	{path: '/news', component: News},
	{path: '/news/item', component: NewsTopic, name: 'newsitem'},
	{path: '/air', component: Air},
	{path: '/places', component: Places},
	{path: '/departments', component: Departments},
	{path: '/staff', component: Staff},
	{path: '/docs', component: Docs},
	{path: '/schedule', component: Schedule},
	{path: '/videos', component: Videos},
	{path: '/info', component: Info},
]

