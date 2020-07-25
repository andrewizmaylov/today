<template>
    <div class="container">
        <section class="mt-4 px-4 flex items-center justify-center">
            <router-link :to="link.route" v-for="link in userHotMenu.slice(0,2)" :key="link.key" class="w-5/12 hotMenuItem" >{{link.name}}</router-link>
            <router-link to="user/tasks" class="w-2/12 hotMenuItem">...</router-link>
        </section>

        <div class="container px-4 my-4 mr-6 flex flex-no-wrap overflow-auto">
            <div v-for="place in places" class="relative w-2/3 flex-none mx-2 pb-2 shadow rounded-lg overflow-hidden">
                <img :src="place.img" alt="" class="place">
                <div class="absolute " style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%); bottom: 0px; left: 0px; width: 100%">
                    <span class="cardTitle sm:text-sm md:text-2xl">{{place.title}}</span>
                </div>
                <!-- <place :place="place" alt="" class=""></place> -->
            </div>
            <div class="inline-block w-2 pl-2">&nbsp</div>
        </div>

        <div class="container mt-4">
            <ul class="flex border-b justify-center">
                <li class="mr-1" :class="{activeLink: today}"  @click="today=true">
                    <a class="tab"  :class="{activeTab: today}"  href="#">Расписание на день</a>
                </li>
                <li class="mr-1" :class="{activeLink: !today}" @click="today=false">
                    <a class="tab" :class="{activeTab: !today}" href="#">Накануне</a>
                </li>
            </ul>
            <div class="relative flex py-4 bg-white px-12 text-xs text-gray-600">
                <section class="mr-2" v-show="!makeChange">
                    <div v-if='today'>
                        <p oncopy="return false" ondragstart="return false"><b>04:00.</b> Начало циркадного ритма. В это время организм выделяет в кровь стрессовый гормон кортизон, который запускает механизмы основных функций и отвечает за нашу активность. Именно этот гормон помогает проснуться людям, которые предпочитают вставать рано.</p>

                        <p oncopy="return false" ondragstart="return false"><b>05:00-06:00.</b> Пробуждение организма. В этот период ускоряется обмен веществ, повышается уровень аминокислот и сахара, которые не позволяют человеку крепко спать под утро.</p>

                        <p oncopy="return false" ondragstart="return false"><b>07:00-09:00.</b> Идеальное время для легкой физической нагрузки, когда можно быстро привести расслабленный после сна организм в тонус. В это время хорошо работает пищеварительная система: усвоение полезных веществ происходит быстрее, что помогает эффективно перерабатывать пищу и преобразовывать ее в энергию.</p>

                        <p oncopy="return false" ondragstart="return false"><b>09:00-10:00.</b> Период, когда осваивается энергия, полученная от приема пищи. В течение этого времени человек способен хорошо справляться с заданиями на внимание и сообразительность, а также успешно использовать кратковременную память.</p>

                        <p oncopy="return false" ondragstart="return false"><b>10:00-12:00.</b> Первый пик работоспособности, период максимальной умственной активности. В это время человек хорошо справляется с задачами, требующими повышенной концентрации.</p>

                        <p oncopy="return false" ondragstart="return false"><b>12:00-14:00.</b> Время ухудшения работоспособности, когда необходимо дать отдых уставшему мозгу. Этот период подходит для перерыва на обед, поскольку работа пищеварительного тракта ускоряется, кровь отходит к желудку, умственная активность организма снижается.</p>

                        <p oncopy="return false" ondragstart="return false"><b>14:00-16:00.</b> Это время лучше посвятить спокойному перевариванию съеденного, так как организм пребывает в состоянии легкой усталости после обеда.</p>

                        <p oncopy="return false" ondragstart="return false"><b>16:00-18:00.</b> Второй пик активности и работоспособности. Организм получил энергию от пищи, все системы вновь работают в полном режиме.</p>

                        <p oncopy="return false" ondragstart="return false"><b>18:00-20:00.</b> Лучшее время для ужина, полученную еду организм успеет переварить до утра. После приема пищи можно прогуляться или спустя час заняться физическими упражнениями, отправиться на тренировку.</p>

                        <p oncopy="return false" ondragstart="return false"><b>20:00-21:00.</b> Это время подходит для занятий спортом, посещения секций, общения.</p>

                        <p oncopy="return false" ondragstart="return false"><b>21:00-22:00.</b> Период, когда возрастает способность мозга к запоминанию. В это время есть не рекомендуется.</p>

                        <p oncopy="return false" ondragstart="return false"><b>22:00.</b> Начало фазы сна. В организме запускаются восстановительные процессы, выделяются гормоны молодости. Тело переходит в состояние отдыха.</p>

                        <p oncopy="return false" ondragstart="return false"><b>23:00-01:00.</b> В это время процесс обмена веществ максимально замедляется, снижается температура тела и частота пульса. Наступает фаза глубокого сна, когда наш организм лучше всего отдыхает.</p>

                        <p oncopy="return false" ondragstart="return false"><b>02:00-03:00.</b> Период, когда все химические реакции замедлены, гормоны практически не вырабатываются. Отсутствие сна в это время может привести к ухудшению состояния и настроения в течение всего дня.</p>
                    </div>
                    <div class="" v-else>
                      <p oncopy="return false" ondragstart="return false">Мы уже говорили, что предложить универсальный распорядок дня, который бы подошел каждому невозможно. При составлении расписания учитываются многие личные факторы, но существуют и пункты которым обязательно должны следовать все. Это необходимые условия для всех, кто хочет вести здоровый образ жизни и быть здоровым.</p>
                    </div>
                </section>
                <section v-show="makeChange" @click="makeChange=false" class="py-16">
                    <p>Вносить изменения в существующее расписание, а также создавать расписание на следующие дни могут только редакторы.</p>
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
                ],
                makeChange: false,
                today: true,
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
    .tab {
        display: inline-block;
        padding-top: .5rem;
        padding-bottom: .5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        background: white;
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

</style>
