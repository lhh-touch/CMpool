<template>
<div class="con-nav" id="con-nav" :class="{'fixedActive':isAddClass==1}">
    <div class="con-nav-top">
        <div class="top-nav view-center row-lr">
    		<ul class="top-nav-left row-l">
    			<li>2018-03-16</li>
    			<li>2.36547Mh/s</li>
    			<li>฿ Bitcoin</li>
    		</ul>
    		
    		<ul class="top-nav-right row-l">
    			<li class="row-l">
    			<!--<em icon="el-icon-date"></em>-->
    			<i class="el-icon-date"></i>
    			
    			<el-menu :default-active="languageIndex" class="el-menu-demo"
	    			 mode="horizontal" @select="languageSelect" 
	    			 background-color="transparent" text-color="#00c1de"
	    			 active-text-color="#fff">
				 	<el-submenu index="1">
		    			<template slot="title">{{languageText}}</template>
			    		<el-menu-item index="1-1">简体中文</el-menu-item>
				    	<el-menu-item index="1-2">英文</el-menu-item>
				    	<el-menu-item index="1-3">繁文</el-menu-item>
				  	</el-submenu>
				</el-menu>
    			</li>
    			<li class="">
    				<em class="el-icon-date"></em>
    				<router-link to="" class="nav-login">登录</router-link>
    			</li>
    			<li>
    				<router-link to="" class="nav-register">注册</router-link>
    			</li>
    		</ul>
        </div>
    </div>
    <div class="con-nav-middle">
        <div class="main-nav clear-float view-center">
            <div class="main-nav-logo">
                cmpool
            </div>
            <div class="main-nav-menu">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="transparent">
                    <el-menu-item index="1">主页</el-menu-item>
                    <el-menu-item index="2">网站仪表板</el-menu-item>
                    <el-menu-item index="3">个人中心</el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
    <div class="con-nav-footer">
        <div class="main-nav-tab view-center">
        </div>
    </div>
</div>
</template>
<script>
// import routeObj from '../router/nav.config.js';
export default {
    data() {
        return {
            activeIndex: '',
            isAddClass:0,//是否添加.fixedActive,
            languageIndex:'1-1',
            languageText:'中文简体',
            languageArr:['简体中文','英文','繁文'],
            routeObj:{
                '1':'/index',
                '2':'/dashboard/dashboard',
                '3':'/myaccout/setting'
            }
        };
    },
    methods: {
    	//导航切换
        handleSelect(key, keyPath) {
            if(this.activeIndex!=key){
                this.activeIndex = key;
                this.$router.push({
                    path:this.routeObj[key]
                })
                window.sessionStorage.setItem('comNavActiveIndex',key);
            }
            //每次切换路由时，判断当前页面是否为首页，若为首页固定导航栏
            if(key=='1'){
            	this.isAddClass=1;
            }else{
            	this.isAddClass=0;
            }
        },
        //语言切换
        languageSelect(key,keyPath){
        	var languageIndex=key.substring(key.length-1);
        	this.languageText=this.languageArr[languageIndex-1];
        }
    },
    created(){
        this.activeIndex = window.sessionStorage.getItem('comNavActiveIndex') || '1';
        //判断当前页面是否为首页，若为首页固定导航栏
        if(this.activeIndex=='1'){
        	this.isAddClass=1;
        }else{
        	this.isAddClass=0;
        }
    },
    mounted(){
    	
    }
  
};
</script>

<style lang="less">
@theme-color:#2b3137;
@title-color:#ffffff;
@view-width:1180px; //版心宽度
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
}

.con-nav {
	min-width: 1180px;
	&.fixedActive{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		.con-nav-top,.con-nav-middle,.con-nav-footer,.view-center{
			background: transparent;
		}
		.con-nav-middle{
			border-bottom: 1px solid #464a4f;
		}
		
	}
	&.recover{
		.con-nav-top,.con-nav-middle{
			/*background: #2b3137;*/
			background: rgba(20,22,36,.5);
		}
		.con-nav-footer{
			/*background: #e6e9ee;*/
			background: rgba(6,7,8,.6);
		}
		
		
	}
    .view-center {
        width:@view-width;
        margin:0 auto;
    }
    .con-nav-top {
        border-bottom:1px solid #464a4f;
    }
    .con-nav-top,.con-nav-middle {
        background-color: #2b3137;
    }
    .con-nav-footer {
        background-color: #e6e9ee;
    }
    /*最顶部导航*/
    .top-nav {
        height:40px;
        color: #fff;
        align-items: center;
        font-size: 14px;
        a{
        	padding: 0 12px;
        	color: #fff;
        	vertical-align: middle;
        }
        .top-nav-left{
        	li{
        		padding: 0 12px;
        		border-right: 1px solid #999;
        		&:last-child{
        			border: none;
        		}
        	}
        }
        .top-nav-right{
        	.el-menu{
        		width: 116px;
        		margin-left: 10px;
        	}
        	.el-submenu__title{
        		padding: 0 8px !important;
        	}
        	li:first-child{
        		margin-right: 8px;
        	}
        	.el-menu--horizontal{
        		border: none;
        	}
        	.el-menu--horizontal>.el-submenu.is-active .el-submenu__tit{
        		border: none
        	}
        	.el-menu--horizontal>.el-submenu .el-submenu__title{
        		height: 40px;
        		line-height: 40px;
        		border: none;
        	}
        	.el-menu--horizontal>.el-submenu .el-menu-item:hover{
        		background-color: rgba(255,255,255,.04) !important;
        	}
        	.el-submenu__title i{
        		color: #fff;
        	}
        	.el-submenu__title:hover{
        		background-color: rgba(255,255,255,.04) !important;
        	}
        	.el-menu-item:hover{
        		background-color: rgba(255,255,255,.04) !important;
        	}
    		em{
    			display: inline-block;
    			/*width: 20px;*/
    			/*height: 20px;*/
    			vertical-align: middle;	
    		}
        	.nav-register{
        		border-left: 1px solid #999;
        	}
        }
    }
    .main-nav {
        background-color: transparent;
        // border-bottom:1px solid red;
        .main-nav-logo {
            float:left;
            color:#fff;
            height: 60px;
            line-height: 60px;
            font-size:25px;
            font-weight:700;
            font-style:italic;
        }
        .main-nav-menu {
            float:right;
            // background-color: red;
            .el-menu--horizontal>.el-menu-item {
                float: left;
                height: 60px;
                line-height: 60px;
                margin: 0;
                color: @title-color;

            }
            .el-menu--horizontal>.el-menu-item.is-active {
                // color: @title-color;
                background-color: transparent !important;
                border-bottom:3px solid #2ec2dc;
            }
            .el-menu--horizontal {
                border-right: none;
                border-bottom: none;
            }
        }
        
    }
    .main-nav-tab { 
        height:50px;
        background-color: #e6e9ee;
    }
    .clear-float:after {
        // &:after{
        content:'';
        height:0;
        line-height:0;
        display:block;
        visibility:
        hidden;
        clear:both;
        // }
    }
    .main-nav .main-nav-menu .el-menu--horizontal > .el-menu-item {
        &:hover {
        background-color: rgba(255,255,255,.04) !important;
    }
}

}

/*语言选择组件样式重置*/
.el-menu--horizontal{
	border: none;
}
.el-menu--horizontal .el-menu--popup{
	width: 92px !important;
	background: rgba(6,6,6,.4) !important;
	text-align: center;
}
.el-menu--collapse .el-menu .el-submenu, .el-menu--popup{
	min-width: 80px !important;
}
.el-menu--horizontal .el-menu--popup .el-menu-item:hover{
    background-color: rgba(255,255,255,.04) !important;
}
</style>
