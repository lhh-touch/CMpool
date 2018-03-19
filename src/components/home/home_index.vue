<template>
<div class="home-index">
		<div class="home-banner" style="width: 100%;">
		  	<el-carousel :interval="100000">
			    	<el-carousel-item v-for="item in 4" :key="item">
				    		<!--<img src="../../../static/img/banner_01.jpg" alt="" />-->
				    </el-carousel-item>
			  </el-carousel>
		</div>
		
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>
		
		<el-table class="pollTable" :data="pooldata" stripe>
			<el-table-column label="标记" prop="mark" width="60">
				<template slot-scope="scope">
					<i class="el-icon-success"></i>
				</template>
					
			</el-table-column>
			<el-table-column label="货币名字" prop="coinName" sortable>
				<template slot-scope="scope">
					<div>
						<i class="el-icon-time"></i>
						<span>{{scope.row.coinName}}</span>
					</div>
					
				</template>	
			</el-table-column>
			<el-table-column label="算法" prop="compute" sortable></el-table-column>
			<el-table-column label="费用" prop="cost" sortable></el-table-column>
			<el-table-column label="矿工数量" prop="mun" sortable></el-table-column>
			<el-table-column label="效率" prop="efficient" sortable></el-table-column>
			<el-table-column label="营收" prop="income" sortable></el-table-column>
			<el-table-column label="掘矿难度" prop="difficulty" sortable>
				<template slot-scope="scope">
					<!--<el-progress :text-inside="true" :stroke-width="18" :percentage="scope.row.difficulty" :status="scope.row.difficulty>=50 ? 'success' : 'exception'"></el-progress>-->
					<v-progress :progressHeight="14"  :progressNum="scope.row.difficulty"></v-progress>
				</template>	
			</el-table-column>
			<el-table-column label="上次开矿时间" prop="time" sortable></el-table-column>
		</el-table>
		
		
		<p>{{num}}</p>
		<div style="200px">
			<v-progress :progressHeight="14"  :progressNum="num"></v-progress>
		</div>
		
		
		<el-button @click="aa">click</el-button>
		
		<div class="same-layout welcome">
			<div class="same-content">
				<h2>欢迎来到CMPOOL矿池</h2>
				<p>
					  cmpool矿池是一家高效的数字货币矿池，致力于为矿工提供更友好的界面、
					  更完善的功能、更方便的使用和更丰厚透明的收益，cmpool矿池提供比特币、莱特币、以太坊等多种数字货币的挖矿服务，
					  并支持PPS、PPLNS、SOLO等多种付款方式。
				</p>
				<el-button type="sele-blue" @click="diging">开始挖矿</el-button>
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
import vProgress from "../../common/v-progress";
export default {
	name:'home_index',
	components: {
    	headTime,
    	vProgress
  	},
	data(){
		return {
			num:1,
			pooldata:[
				{
					mark:25,
					coinName:'比特币',
					compute:'哈希算法',
					cost:3000,
					mun:35,
					efficient:'39%',
					income:4444,
					difficulty:100,
					time:'2018-3-18'
				},{
					mark:25,
					coinName:'比特币',
					compute:'哈希算法',
					cost:3000,
					mun:35,
					efficient:'39%',
					income:3333,
					difficulty:80,
					time:'2018-3-18'
				},{
					mark:25,
					coinName:'比特币',
					compute:'哈希算法',
					cost:3000,
					mun:35,
					efficient:'39%',
					income:22222,
					difficulty:60,
					time:'2018-3-18'
				},{
					mark:25,
					coinName:'比特币',
					compute:'哈希算法',
					cost:3000,
					mun:35,
					efficient:'39%',
					income:1111,
					difficulty:25,
					time:'2018-3-18'
				}
			]
			
		}
	},
	mounted(){
		
		setInterval(()=>{
			this.pooldata.forEach((item,index)=>{
				item.difficulty=item.difficulty-1;
			})
//			this.pooldata[0].difficulty=this.pooldata[0].difficulty-1;
//			console.log(this.pooldata[0].difficulty)
		},1000)
//		var dom=document.querySelectorAll('.el-progress-bar__innerText');
//		setTimeout(()=>{
//			document.querySelectorAll('.el-progress-bar__innerText')[0].innerHTML=160+'%'
//		},1);
//		console.log(document.querySelectorAll('.el-progress-bar__innerText'))
	},
  	methods:{
  		//开始挖矿
  		diging(){
  			console.log('开始挖矿');
  		},
  		aa(){
  			this.num=this.num+1;
  		}
  	},
  	watch:{
//		num:function(){
//			console.log('change');
//		}
  	}
};
</script>
<style lang="less">
	.el-table td>.cell{
		text-align: left !important;
	}
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
    