Vue.component('mycascader', {
	template: `<el-form-item :label="laber">
					<el-cascader v-model="value" :show-all-levels="false" :options="options" :props="{ expandTrigger: 'hover' }" @change="handleChange" style="width: 120px;" clearable>
					</el-cascader>
				</el-form-item>`,
	//	data: function() {
	//		return {
	//			objs: {}
	//		};
	//	},
	methods: {
		handleChange(value) {
			this.$emit('handlechange', value);
		}
	},
	props: ['laber', 'options', 'value']
});