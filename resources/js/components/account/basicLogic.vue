<script>
	export default {

		data() {
			return {
				form: new Form ({}),
				user_id: '',
			}
		},
		methods: {
			check(field) {
				return this.form.errors.has(field);
			},
			errorMessage(field) {
				return this.form.errors.get(field);
			},
			submitForm() {
				this.form.submit(this.formMethod, this.formPath)
					.then(response => {
						console.log(response.data);
						this.$router.push('/meal');
					})
					.catch(error => {
						console.log('error.response.data');

					});		 
			},
			setForm() {
				let path = '/app/web/sort/of/how/i/will/mess/you/up'+this.$store.getters.path;
				// alert(this.$store.getters.path);
				axios.get(path)
				  .then(response => {
				  	// console.log(response.data);
				  	if(response.data.user_id) {
				  		this.user_id = response.data.user_id;
				  	}
				  	// console.log('setForm ', response.data);
				  	this.form = new Form(response.data);
				  })
				  .catch(error => {
				  	if(error.response.status == 401){
				  		this.$router.push('/login');
				  	} ;
				  })
			},
		}, 
		created() {
			// console.log('created basicLogic');
			this.setForm();
		},
		computed: {
			formMethod() {
				if(this.user_id) {
					return 'patch';
				}
				return 'post';
			},
			formBtn() {
				if(this.user_id) {
					return 'Изменить' // if patch
				}
				return 'Добавить'; // post
			},
			formPath() {
				if(this.user_id) {
					return this.$store.getters.path+'/'+this.user_id; //if patch request
				}
				return this.$store.getters.path; //if post request om row creation
			}
		}

	}

</script>
<style scoped>
	label, button {
		padding-left: 12px;
		margin-top: 10px;
	}
	.small {
		font-size: 0.8em;
		padding-left: 12px;
	}

</style>