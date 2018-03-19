<template>
<div class="v-progress" :style="myHeightStyle">
	<div class="progress-inner" :class="[{'addPosition':this.progressNum>=30,'p-danger':this.progressNum>=100,'p-success':this.progressNum<=50,'p-middle':this.progressNum>50&this.progressNum<100}]" :style="myWidthStyle">
		<div class="progress-inner-text" :class="{'addPosition':this.progressNum>=30}">{{this.progressNum}}%</div>
	</div>	
</div> 
</template>
<script>
export default {
	name:'v-progress',
	props:['progressNum','progressHeight'],
	data(){
		return {
			isSetH:false,
			initW:this.progressNum,
			myWidthStyle:{
				width:this.progressNum+'%',
			},
			myHeightStyle:{
				height:this.progressHeight+'px'||'18px',
				lineHeight:this.progressHeight+'px'||'18px'
			}
		}
	},
	mounted(){
		if(this.progressHeight!==undefined||this.progressHeight!==""){
			this.isSetH=true;
		}
	},
	watch:{
		'progressNum':function(curVal,oldVal){
			this.myWidthStyle={
				width:curVal+'%',
			}
		}
	}
};
</script>
<style lang="less">
.v-progress{
	width: 100%;
	height: 18px;
	border-radius: 18px;
	background: #f1f1f1;
	.progress-inner{
		max-width: 100%;
		height: 100%;
		border-radius: 18px;
		&.addPosition{
			position: relative;
		}
		.progress-inner-text{
			height: 100%;
			min-width: 30px;
			text-indent: 5px;
			color: #fff;
			font-size: 12px;
			text-align: center;
			&.addPosition{
				position: absolute;
				top: 0;
				right: 5px;
			}
		}
		
	}
	/*根据不用的数值使用不同的背景色*/
	.p-success{
		/*background: #55c955;*/
		background: repeating-linear-gradient(-45deg,red, #ccc 20px, green 20px);
	}
	.p-middle{
		/*background: #ffaf0a;*/
		/*background: repeating-linear-gradient(-45deg, #ff0000, #00ff00 20px, #0000ff 25px);*/
		background: -webkit-repeating-linear-gradient(-45deg, #f18b70, #f18b70 10px, #978f8d 5px, #978f8d 20px);
	}
	.p-danger{
		/*background: #f60;*/
		background: repeating-linear-gradient(-45deg, #ff0000, #00ff00 10%, #0000ff 15%);
	}
}

</style>
    