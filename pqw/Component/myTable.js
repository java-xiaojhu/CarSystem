Vue.component('mytable', {
	template: `<el-table :data="pagelist" width="100%"  border highlight-current-row  @current-change="handleCurrentChange">
        <el-table-column v-for="(item,index) in tablehead" :key="index" :label="item.label" :property="item.property" align="center">
              <template slot-scope="scope">{{scope.row[scope.column.property]}}</template>
         </el-table-column>
         <slot name="operating">
         </slot>
 </el-table>`,
	data: function() {
		return {
			objs: {}
		};
	},
	methods: {
		handleCurrentChange(obj) {
			this.objs = JSON.parse(JSON.stringify(obj));
			this.$message.success('选择成功!' + JSON.stringify(obj));
			this.$emit('updateobj', this.objs);
		}
	},
	props: ['tablehead', 'pagelist']
});