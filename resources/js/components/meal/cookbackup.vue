			<!-- top appeal for user with user menu from appeal component -->
			<appeal v-on:expand="showUserMenu=true" v-on:collapse="showUserMenu=false" :class="showUserMenu ? 'absolute z-10 inset-0 bg-gray-800' : ''"></appeal>

			<!-- set tomorrow menu -->
			<section class="" v-show="selectMenu">
				<div class="mx-auto pt-8 flex flex-col" >
					<span class="text-4xl meal-txt my-4">select what you're gonna cook tomorrow {{tomorrow}}</span>
					<section class="mx-auto py-4 px-6 bg-gray-300 rounded border">
						<div class="flex items-center mb-2" v-for="item in menu">
							<input class="" type="checkbox" :id="item.id" :value="item.id" v-model="aviable" >
						    <label class="ml-2 text-sm text-gray-800" :for="item.id">{{item.eng}}</label>
						</div>
					</section>

					
				</div>
			</section>			
		<!-- <foodmenu :menu="menu" :title="'eng'" :wide="'w-1/5'" @select="selectDish"></foodmenu> -->
	</div>	
	
	<!-- menu for the next day appear then more then one item is in list -->
	<section v-if="aviable.length >0">
		<div class="mx-auto md:max-w-2xl pt-8 flex flex-col">
			<span class="text-4xl meal-txt my-4">menu for {{tomorrow}}</span>
			<foodmenu :menu="aviable" :title="'eng'" :wide="'w-3/5'" @select="selectDish"></foodmenu>
		</div>

		<div class="flex justify-center mt-4 px-2 pb-8">
			<div class="border border-2 border-gray-300 px-8 py-2 meal-txt text-2xl rounded-lg mx-2" @click="setMenu">Set menu for {{tomorrow}}</div>
		</div>
	</section>
</section>

<!-- cooking today and order list -->
<section v-show="!selectMenu" class="h-full">
	<span class="text-4xl meal-txt my-4">today menu</span>
	<foodmenu :menu="today.data" :title="today.title" :wide="'w-2/3'"></foodmenu>
	<div class="flex justify-center mt-4 px-2">
		<div class="border border-2 border-gray-300 px-8 py-2 meal-txt text-2xl rounded-lg mx-2 mb-16" @click="selectMenu=true">Change menu for {{tomorrow}} ?</div>
	</div>

	<span v-show="totalScore" class="meal-txt text-4xl rate">Voices total {{this.overallRating.length}}. Average {{totalScore}} </span>	

	<section v-show="comments.length>=1" class="flex flex-col w-2/3 max-w-md mx-auto pb-6">
		<span  class="meal-txt text-2xl rate mt-6">Most recent comments:</span>
		<div  v-for="item in comments" class="border border-2 border-gray-300 px-6 py-2 meal-txt text-2xl rounded-lg mt-2">
			{{item.msg}}<br>
			<span class="text-xxs font-mono rate">{{item.user.email}}</span>
		</div>
	</section>		
</section>