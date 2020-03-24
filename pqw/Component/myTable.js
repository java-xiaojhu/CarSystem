Vue.component('mytable', {
	template: `<el-table :data="pagelist" width="100%"  border highlight-current-row  @current-change="handleCurrentChange">
        <el-table-column v-for="(item,index) in tablehead" :key="index" :label="item.label" :property="item.property" align="center">
              <template slot-scope="scope">{{scope.row[scope.column.property]}}</template>
         </el-table-column>
 </el-table>`,
	methods: {
		handleCurrentChange(obj) {
			this.$message.info(JSON.stringify(obj));
			this.$emit('updateobj', obj);
		}
	},
	props: ['tablehead', 'pagelist']
});