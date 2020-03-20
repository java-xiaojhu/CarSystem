Vue.component('hm',{
	template:`<ul class="nav" id="main-menu">
					<li><a href="#"><i class="fa fa-sitemap"></i> 请假模块<span
							class="fa arrow"></span></a>
						<ul class="nav nav-second-level">
							<li><a href="addLeave.html">请假</a></li>
							<li><a href="showLeave.html">查看请假</a></li>
						</ul></li>
					<li><a href="#"><i class="fa fa-sitemap"></i> 报销模块<span
							class="fa arrow"></span></a>
						<ul class="nav nav-second-level">
							<li><a href="Reimburse/addReimburse.html">新增报销单</a></li>
							<li><a href="Reimburse/showReimburse.html">查看报销单</a></li>
						</ul></li>
					<li><a href="#"><i class="fa fa-sitemap"></i> 统计模块<span
							class="fa arrow"></span></a>
						<ul class="nav nav-second-level">
							<li><a href="#">报销单月度统计</a></li>
							<li><a href="#">报销单年度统计</a></li>
						</ul></li>
					<li><a href="#"><i class="fa fa-sitemap"></i> 信息中心<span
							class="fa arrow"></span></a>
						<ul class="nav nav-second-level">
							<li><a href="#">信心收件箱</a></li>
							<li><a href="#">信心发件箱</a></li>
						</ul></li>
				</ul>`});