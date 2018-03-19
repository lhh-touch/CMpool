<template>
    <el-row class="hidden-xs-only">
      <el-footer style="height:230px;">
      	<div class="footer-top-wrap">
      		<div class="footer-top-content row-lr">
      			<div class="top-left">
      				<h3>CMpool矿池</h3>
      				<p>全球领先的综合矿池</p>
      				<p>提供比特币、莱特币、以太坊等多种数字货币的挖矿服务</p>
      			</div>
      			<div class="top-right">
      				<h5>关注我们</h5>
      				<div class="logo-img-box">
      					<router-link to="">
      						<img src="../../static/img/company_logo1.gif" alt="logo" />
      					</router-link>
      					<router-link to="">
      						<img src="../../static/img/company_logo2.gif" alt="logo" />
      					</router-link>
      					<router-link to="">
      						<img src="../../static/img/blog_logo.png" alt="logo" />
      					</router-link>
      				</div>
      			</div>
      		</div>
      	</div>
      	<div class="footer-bot-wrap">
      		<div class="footer-bot-content row-lr">
      			<div class="bot-left row-l">
  					<router-link to="">入门准备</router-link>
  					<router-link to="">常见问题</router-link>
  					<router-link to="">问题反馈</router-link>
  					<router-link to="">服务条款</router-link>
      			</div>
      			<div>
      				Copyright &copy; 2017.ALL rights reserved
      			</div>
      		</div>
      		
      	</div>
      </el-footer>
      <!--<el-col class="foot">
          <p >{{$t('footer[0]')}}
              <a href="#">
                  <i class="fa fa-twitter"></i>
                  Twitter
              </a>
              {{$t('footer[1]')}}
              <a href="#">
                  <i class="fa fa-facebook"></i>
                  Facebook
              </a>
            {{$t('footer[2]')}}
            {{$t('footer[3]')}}
            <a href="#">
                BitcoinAverage Price Index
            </a>
            {{$t('footer[4]')}}
          </p>
      </el-col>-->
    </el-row>
</template>
<style lang="less">
.row-l{
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.row-r{
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.row-c{
	display: flex;
	justify-content: center;
	align-items: center;
}
.row-lr{
	display: flex;
	justify-content: space-between;
	/*align-items: center;*/
}

.el-footer{
	min-width: 1180px;
	color: #999;
	text-align: left;
	font-size: 12px;
	padding: 0;
	h3{
		font-size: 18px;
		color: #fff;
		margin-bottom: 15px;
		font-style: italic;
	}
	h5{
		font-size: 12px;
		color: #fff;
		margin-bottom: 15px;
	}
	.footer-top-wrap{
		width: 100%;
		background: #1b2024;
		.footer-top-content{
			width: 1180px;
			height: 175px;
			margin: 0 auto;
			padding-top: 40px;
			.top-left{
				p{
					margin-bottom: 8px;
					font-size: 12px;
				}
			}
			.top-right{
				img{
					width: 44px;
					margin-right:11px;
				}
			}
		}
	}
	.footer-bot-wrap{
		width: 100%;
		background: #080808;
		.footer-bot-content{
			width: 1180px;
			height: 55px;
			margin: 0 auto;
			align-items: center;
			.bot-left{
				a{
					color: #999;
					margin-right: 20px;
				}
			}
		}
	}
}
.foot{
    background-color: rgb(211, 220, 230);
    line-height: 60px;
    position: relative;
    width: 100%;
    bottom: 0;
    left: 0;
}
</style>
