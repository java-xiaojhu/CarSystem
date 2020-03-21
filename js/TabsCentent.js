Vue.component('cen', {
	template: `
				<div class="pageCent" v-text="true? lordurl:'hh'">
					
				</div>
		    `,
	methods: {
		show() {
			console.log(this.lordurl)
			$('.pageCent').load(`../${this.lordurl}`);
		}
	},
	props:["lordurl"]
})