<template>
    <div class="container">
        <section class="mt-4 px-4 flex items-center justify-center">
            <router-link :to="link.route" v-for="link in userHotMenu.slice(0,2)" :key="link.key" class="w-5/12 hotMenuItem" >{{link.name}}</router-link>
            <router-link to="user/tasks" class="w-2/12 hotMenuItem">...</router-link>
        </section>

        <div class="container px-4 mt-4 mr-6 flex flex-no-wrap overflow-auto">
            <div v-for="place in places" class="relative w-2/3 flex-none bg-blue-500 mx-2">
                <img :src="place.img" alt="" class="place">
                <div class="absolute " style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%); bottom: 0px; left: 0px; width: 100%">
                    <span class="cardTitle sm:text-sm md:text-2xl">{{place.title}}</span>
                </div>
                <!-- <place :place="place" alt="" class=""></place> -->
            </div>
            <div class="inline-block w-2 pl-2">&nbsp</div>
        </div>

        <div class="container px-6 mt-4">
            <ul class="flex border-b justify-center">
                <li class="-mb-px mr-1 ">
                    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 font-semibold" href="#">Расписание на день</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-gray-500 hover:text-gray-800 font-semibold" href="#">Накануне</a>
                </li>
            </ul>
            <div class="relative w-full pt-4">
                <p class="px-6 text-xs text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem, provident? Dolores odio debitis inventore nisi. Natus molestias dolore nam quas minus praesentium delectus blanditiis, nisi veniam, adipisci accusantium hic!
                </p>            
                <p class="px-6 text-xs text-gray-600 py-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem, provident? Dolores odio debitis inventore nisi. Natus molestias dolore nam quas minus praesentium delectus blanditiis, nisi veniam, adipisci accusantium hic!
                </p>
                <div class="absolute flex flex-col right-0 top-0 text-lg">
                    <span class="" @click="writehere">*</span>
                    <span class="" @click="writehere">?</span>
                    <span class="" @click="writehere">!</span>
                    
                </div>
            </div>
        </div>  
        <news class="mt-4"></news>

    </div>
</template>

<script>
    import news from './news.vue';
    import place from './place.vue';

    export default {
        name: 'home',
        data() {
            return {
                places: [
                    {img: '/img/moscowDom2.jpg', title: 'Дом-2 | Москва'},
                    {img: '/img/DJI_0004.jpg', title: 'Остров Любви'},
                    {img: '/img/ssl_kartinka.jpg', title: 'Спаси свою любовь'},
                    {img: '/img/BB.jpg', title: 'Бородина против Бузовой'},
                ],
                userHotMenu: [
                    {key: 1, route: '/exitplot', name: 'добавить выезд'},
                    {key: 2, route: '/stat', name: 'статистика'},
                    {key: 3, route: '/schedule', name: 'расписание'},
                    {key: 4, route: '/report', name: 'отчеты'},
                ]
            }
        },
        methods: {
            writehere() {
                console.log('rrrr');
            }
        },
        components: {
            news, place,
        },
        mounted() {
        }
    }
</script>
<style>
    .cardTitle {
        margin-bottom: 1.2em;
        padding-left: .85em;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        color: #FFFFFF;
        
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>
