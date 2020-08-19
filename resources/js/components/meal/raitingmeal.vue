<template>
	<section class="mt-8">
		<span class="block meal-txt text-4xl pt-8 pb-4">Оцени, как поел вчера:</span>
		<span class="flex justify-center align-middle">
			<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" v-for="i in 5" :key=i :class="i>raiting ? 'text-gray-500' : 'rate'" class="m-3 fill-current" @click="rate(i)">
				<path d="M17 8.39a1.11 1.11 0 00-.645-2l-4.5-.17a.115.115 0 01-.1-.075l-1.555-4.2a1.11 1.11 0 00-2.085 0L6.565 6.16a.115.115 0 01-.1.075l-4.5.17a1.11 1.11 0 00-.645 2l3.53 2.775a.115.115 0 01.04.12l-1.215 4.305a1.11 1.11 0 001.69 1.225l3.73-2.5a.11.11 0 01.125 0l3.73 2.5a1.1 1.1 0 001.275 0 1.1 1.1 0 00.415-1.2l-1.225-4.32a.11.11 0 01.04-.12L17 8.39z" />
			</svg>
		</span>
		<span v-show="totalScore" class="text-xxs rate">Всего голосов {{this.overallRating.length}}. Средний балл {{totalScore}} </span>

		<section v-show="comments.length>=1" class="flex flex-col w-2/3 max-w-md mx-auto">
			<span  class="meal-txt text-2xl rate mt-6">Последние комментарии:</span>
			<div  v-for="item in comments" class="border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2">
				{{item.msg}}<br>
				<span class="text-xxs font-mono rate">{{item.user.email}}</span>
			</div>
		</section>
		<span class="block meal-txt text-2xl pt-8 pb-4" @click="showComment=true">{{commentAppeal}}</span>
		<section v-show="showComment" class="flex flex-col w-2/3 max-w-md mx-auto">
			<textarea name="" id="" cols="30" rows="9" v-model='comment' class="outline-none rounded p-1" />
			<div class="border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2" @click="addComment">Оставить комментарий</div>
		</section>
	</section>
</template>
<script>
	export default {
		name: 'raitingmeal',
		data() {
			return {
				date: new Date(),
				raiting: 0,
				overallRating: [],
				totalScore: 0,

				comment: '',
				comments: [],
				showComment: false,
				commentAppeal: 'Хочешь оставить комментарий?',
			}
		},
		methods: {
			rate(i) {
				this.raiting = i;
				let date = moment(this.date).subtract(1, 'days').format('YYYY-MM-DD');
				axios.post('/mealRaitng', {
						date: date,
						rate: i,
				  })
				  .then(response => {
				  	axios.get('/mealRaitng/'+date)
				  	  .then(response => {
				  	  	this.overallRating = response.data;
				  	  	this.total();
				  	    console.log(response);
				  	    if(this.raiting<4) {
				  	    	this.showComment = true;
				  	    	this.commentAppeal = 'Расскажи, что тебе не понравилось?';
				  	    } else {
				  	    	this.showComment = false;
				  	    	this.commentAppeal = 'Хочешь оставить комментарий?';
				  	    }
				  	  })
				  	  .catch(error => {
				  	    console.log(error);
				  	  });
				    console.log(response);
				  })
				  .catch(error => {
				    console.log(error);
			  		this.$router.push({name: 'login'});
				  });
				 
			},
			total() {
				let sum = this.overallRating.reduce(function(a, b){
				        return a + b;
				    }, 0);
				return this.totalScore = Math.floor(sum/this.overallRating.length*100)/100;
			},
			addComment() {
				let date = moment(this.date).subtract(1, 'days').format('YYYY-MM-DD');
				axios.post('/comment', {
				    msg: this.comment,
				    date: date,
				  })
				  .then(response => {
				  	this.comment = '';
				  	this.commentAppeal = 'Хочешь сказать еще?';
				  	axios.get('/comment/'+date)
				  	  .then(response => {
				  	  	this.comments = response.data;
				  	    console.log(response);
				  	  })
				  	  .catch(error => {
				  	    console.log(error);
				  	  });
				    console.log(response);
				  })
				  .catch(error => {
				    console.log(error);
				  	this.$router.push({name: 'login'});
				  });		 
			},			
		}
	}
</script>