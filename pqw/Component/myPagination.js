Vue.component('mypagination', {
	template: `<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagenum" :page-sizes="[5, 10, 20, 50]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>`,
	data: function() {
		return {
			pageSize: 5,
			pageNum: 1
		};
	},
	methods: {
		handleSizeChange(size) {
			this.pageSize = size;
			this.$message.success(`第${this.pageNum}页,每页${this.pageSize}条`);
			this.$emit('selectpagelist', this.pageNum, this.pageSize);
		},
		handleCurrentChange(page) {
			this.pageNum = page;
			this.$message.success(`第${this.pageNum}页,每页${this.pageSize}条`);
			this.$emit('selectpagelist', this.pageNum, this.pageSize);
		}
	},
	props: ['pagenum', 'pagesize', 'total']
});