Vue.component('mypagination', {
	template: `<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagenum" :page-sizes="[5, 10, 20, 50]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>`,
	methods: {
		handleSizeChange(size) {
			this.$message.success(`每页${size}条`);
		},
		handleCurrentChange(page) {
			this.$message.success(`第${page}页`);
		}
	},
	props: ['pagenum', 'pagesize', 'total']
});