<template>
<div class="home-index">
		<div class="home-banner" style="width: 100%;">
		  	<el-carousel :interval="100000">
			    	<el-carousel-item v-for="item in 4" :key="item">
				    		<!--<img src="../../../static/img/banner_01.jpg" alt="" />-->
				    </el-carousel-item>
			  </el-carousel>
		</div>
		<div class="same-layout welcome">
			<div class="same-content">
				<h2>欢迎来到CMPOOL矿池</h2>
				<p>
					  cmpool矿池是一家高效的数字货币矿池，致力于为矿工提供更友好的界面、
					  更完善的功能、更方便的使用和更丰厚透明的收益，cmpool矿池提供比特币、莱特币、以太坊等多种数字货币的挖矿服务，
					  并支持PPS、PPLNS、SOLO等多种付款方式。
				</p>
				<el-button type="sele-blue">开始挖矿</el-button>
			</div>
		</div>
		<div class="same-layout advantage">
			<div class="same-content">
				<h2>CMPOOL矿池优势</h2>
				<el-row :gutter="30">
					<el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item,index) in 4" :key="index">
						<dl>
							<dt><img src="../../../static/img/introduct1_03.png" alt="矿池优势"/></dt>
							<dd>
								<h5>高可用性</h5>
								<p>
									我们的服务器分布全球。 智能的负载平衡和故障转移系统确保您在99.9%的时间挖矿进行中。
								</p>
							</dd>
						</dl>
					</el-col>
				</el-row>
			</div>
		</div>
</div> 
</template>
<script>
import headTime from "../headTime.vue";
export default {
	name:'home_index',
	data(){
		return {
			
		}
	},
  	components: {
    	headTime,
  	}
};
</script>
<style lang="less">
.home-index {
	min-width: 1180px;
	.home-banner{
		.el-carousel__arrow{
			width: 60px;
			height: 60px;
			background-color: rgba(31,45,61,.6);
		}
		.el-carousel__arrow i{
			font-size: 30px;
		}
		.el-carousel__button{
			width: 10px;
			height: 10px;
			border-radius: 50%;
			border: 1px solid #fff;
			background: transparent;
		}
		.el-carousel__indicator.is-active{
			.el-carousel__button{
				background: #FFFFFF !important;
			}
		}
		.el-carousel{
			width: 100%;
			.el-carousel__container{
				height: 560px;
				.el-carousel__item{
					background: url(../../../static/img/banner_01.jpg) no-repeat center center;
					background-size:1920px 100% ;
					/*img{
						max-width: 1920px;
					}*/
				}
					
			}
		}
	}
	.same-layout{
		width: 100%;
		.same-content{
			width: 1180px;
			overflow: hidden;
			margin: 0 auto;
			text-align: center;
			padding: 45px 0 0 0;
			h2{
				font-size: 22px;
				color: #333;
				margin-bottom: 20px;
				font-weight: normal;
			}
			p{
				width: 100%;
				line-height: 1.8;
				color: #999;
				font-size: 14px;
			}
		}
		&.welcome{
			height: 265px;
			background: #fff;
			.el-button--sele-blue{
				width: 100px;
				background: #00c1de;
				color: #fff;
				font-size: 14px;
				outline: 0 none;
				border-radius: 5px;
				border-color: #00c1de;
				margin-top: 40px;
			}
		}
		
		&.advantage{
			background: #eff7fc;
			height: 362px;
			.el-row{
				margin-top: 40px;
				min-width: 1180px;
			}
			dl{
				display: flex;
				flex-direction: column;
				align-items: center;
				dt{
					width: 80px;
					height: 70px;
					
				}
				img{
					max-width: 100%;
					
				}
				h5{
					font-weight: 600;
					font-size: 15px;
					margin: 20px 0 10px 0;
				}
				p{
					line-height: 2;
					font-size: 14px;
				}
			}
		}
		
	}
	
				
       
}

</style>
    