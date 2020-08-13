<template>
    <div class="ml-0 mr-0 md:ml-16 md:mr-16">
        <usertasks collapsed="true"></usertasks>
        <div class="container max-w-full px-4 my-4 mr-6 flex flex-no-wrap overflow-auto md:hidden">
            <div v-for="place in places" class="relative w-2/3 flex-none mx-2 shadow rounded-lg overflow-hidden">
                <img :src="place.img" alt="" class="place">
                <div class="absolute " style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%); bottom: 0px; left: 0px; width: 100%">
                    <span class="cardTitle sm:text-sm md:text-2xl">{{place.title}}</span>
                </div>
                <!-- <place :place="place" alt="" class=""></place> -->
            </div>
            <div class="inline-block w-2 pl-2">&nbsp</div>
        </div>

        <div class="hidden px-4 my-4 md:flex">
            <div v-for="place in places" class="relative w-2/3 mx-2 shadow rounded-lg overflow-hidden">
                <img :src="place.img" alt="" class="h-full w-full object-cover object-bottom">
                <div class="absolute " style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%); bottom: 0px; left: 0px; width: 100%">
                    <span class="cardTitle">{{place.title}}</span>
                </div>
            </div>
        </div>
        
        <section class="block lg:flex">
            

        <div class="mt-4 md:mx-auto w-full lg:w-3/5">
            <ul class="flex border-b justify-center">
                <li class="mr-1" :class="{activeLink: today}"  @click="today=true">
                    <a class="tab bg-gray-100"  :class="{activeTab: today}"  href="#">Расписание на день</a>
                </li>
                <li class="mr-1" :class="{activeLink: !today}" @click="today=false">
                    <a class="tab bg-gray-100" :class="{activeTab: !today}" href="#">Накануне</a>
                </li>
            </ul>
            <div class="relative flex py-4 bg-gray-100 px-12 text-xs text-gray-600">
                <section class="mr-2" v-show="!makeChange">
                    <div class="mb-2" v-if='today'>
                        <div class="font-bold mb-2">{{moment(date).format('D MMMM YYYY')}}</div>
                        <p><b>04:00.</b> Начало циркадного ритма. В это время организм выделяет в кровь стрессовый гормон кортизон, который запускает механизмы основных функций и отвечает за нашу активность. Именно этот гормон помогает проснуться людям, которые предпочитают вставать рано.</p>

                        <p><b>05:00-06:00.</b> Пробуждение организма. В этот период ускоряется обмен веществ, повышается уровень аминокислот и сахара, которые не позволяют человеку крепко спать под утро.</p>

                       
                    </div>
                    <div class="mb-2" v-else>
                        <div class="font-bold mb-2">{{this.moment(date).subtract(this.dayCount, 'd').format('D MMMM YYYY')}}</div>
                        <p>В этом блоке размещается подготовленный редакторами текстовый отчет о том, что происходило накануне на одной из четырех съемочных площадок.</p>
                        <p>Отчеты хранятся и подгружаются из БД.</p>
                        <p>Навигация позволяет перемещаться по истории до дня начала ведения автоматизированного учета.</p>
                        <div class="flex justify-between mt-2 mb-4" >
                            <img src="/img/arrowLeft.svg" alt=""   @click="dayCount++">
                            <img src="/img/arrowRight.svg" alt=""  @click="dayCount--" v-show="dayCount>=2">
                        </div>
                    </div>
                </section>
                <section v-show="makeChange"  class="py-16">
                    <p>Only autorised user can post here</p>
                    <!-- <ckeditor v-model="editorData" :config="editorConfig" type="inline"></ckeditor> -->
                </section>

                <div class="absolute flex flex-col right-0 top-0 mt-3 mr-2" v-show="!makeChange">
                    <div v-show="today">
                        <img src="/img/pencil.svg" alt="" class="px-4 py-2" @click="makeChange=true">
                        <img src="/img/people.svg" alt="" class="px-4 py-2">
                    </div>
                    <div v-show="!today">
                        <img src="/img/zoom.svg" alt="" class="px-4 py-2">
                    </div>
                </div>
                <div class="absolute flex flex-col right-0 top-0 mt-3 mr-2" v-show="makeChange">
                    <img src="/img/x-btn.svg" alt="" class="px-4 py-2" @click="makeChange=false">
                </div>
            </div>
        </div>  
        <news class="mt-4 w-full lg:w-2/5"></news>
        </section>
    </div>
</template>

<script>
    import news from './news.vue';
    import place from './place.vue';
    import usertasks from './usertasks.vue';

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
                makeChange: false,
                today: true,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                },
                showDatePicker: false,
                date: new Date(),
                dayCount: 1,
            }
        },
        methods: {
            moment(date) {
                return moment(date);
            },
            pickNewDate() {
                showDatePicker=false;
            },
            showDayCount() {
                return this.dayCount>=2;
            }
        },
        components: {
            news, place, usertasks
        },
        mounted() {
        }
    }
</script>
<style scoped>
    .cardTitle {
        margin-bottom: 1.4em;
        padding-left: .8em;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        color: #FFFFFF;
        
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .tab {
        display: inline-block;
        padding-top: .5rem;
        padding-bottom: .5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        color: rgba(190, 174, 192, 1);
        font-size: 0.75rem;
        font-weight: 600;
        font-style: 'Roboto';
    }
    .activeLink {
        margin-bottom: -1px;
    }
    .activeTab {
        border-left-width: 1px;
        border-top-width: 1px;
        border-right-width: 1px;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        color: rgba(45, 55, 72, 1);
    }
    p {
        padding-bottom: .75em;
    }

</style>
