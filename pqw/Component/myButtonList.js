Vue.component('mybuttonlist', {
	template: `<el-form-item>
					<el-button type="primary" @click="add(obj,addurl,isnull)">新增</el-button>
					<el-button type="warning" @click="update(obj,updateurl,isnull)">修改</el-button>
					<el-button type="danger" @click="del(obj,delurl,isnull)">删除</el-button>
				</el-form-item>`,
	data: function() {
		return {
			objs: {}
		};
	},
	methods: {
		add(obj, addurl, isnull) {
			this.objs = JSON.parse(JSON.stringify(obj));
			if(isnull) {
				this.$message.error('所有项不能为空!');
				return;
			}
			this.$confirm('此操作将增加新数据, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message.success('新增成功!' + addurl);
			}).catch(() => {
				this.$message.info('已取消新增!');
			});
		},
		update(obj, updateurl, isnull) {
			this.objs = JSON.parse(JSON.stringify(obj));
			if(isnull) {
				this.$message.error('没有选择数据,或者数据不完整!');
				return;
			}
			this.$confirm('此操作将修改数据, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message.success('修改成功!' + updateurl);
			}).catch(() => {
				this.$message.info('已取消修改!');
			});
		},
		del(obj, delurl, isnull) {
			this.objs = JSON.parse(JSON.stringify(obj));
			if(isnull) {
				this.$message.error('没有选择数据,或者数据不完整!');
				return;
			}
			this.$confirm('此操作将删除数据, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message.success('删除成功!' + delurl);
			}).catch(() => {
				this.$message.info('已取消删除!');
			});
		}
	},
	props: ['obj', 'delurl', 'addurl', 'updateurl', 'isnull']
});