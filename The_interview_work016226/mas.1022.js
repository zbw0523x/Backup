$("document").ready(function(){




//底部报名验证，输入不能为空且不能带有空格
//ajax type=post url=test.php
	$(".reg-reg button").click(function(){
		var partten = /\s/;
		if(partten.test($(".reg-reg input").eq(0).val()) || $(".reg-reg input").eq(0).val() == ''){
			alert('请输入姓名,且不能带有空格，谢谢!');
			$(".reg-reg input").eq(0).val('');
			$(".reg-reg input").eq(0).get(0).focus();			
		}else if(partten.test($(".reg-reg input").eq(1).val()) || $(".reg-reg input").eq(1).val() == ''){
			alert('请输入电话,且不能带有空格，谢谢!');
			$(".reg-reg input").eq(1).val('');
			$(".reg-reg input").eq(1).get(0).focus();
		}else if(partten.test($(".reg-reg input").eq(2).val()) || $(".reg-reg input").eq(2).val() == ''){
			alert('请输入楼盘名称,且不能带有空格，谢谢!');
			$(".reg-reg input").eq(2).val('');
			$(".reg-reg input").eq(2).get(0).focus();
		}else if(partten.test($(".reg-reg input").eq(3).val()) || $(".reg-reg input").eq(3).val() == ''){
			alert('请输入面积,且不能带有空格，谢谢!');
			$(".reg-reg input").eq(3).val('');
			$(".reg-reg input").eq(3).get(0).focus();
		}else{
			$.ajax({
			     type: 'POST',
			     url: 'test.php',
			     dataType: "text",
			    data: {
			    	action:"register",
			    	userName:$(".reg-reg input").eq(0).val(),
			    	userTel:$(".reg-reg input").eq(1).val(),
			    	userAdress:$(".reg-reg input").eq(2).val(),
			    	userArea:$(".reg-reg input").eq(3).val()
			    },
			    success:function(evt){
			    	alert(evt);
			    },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert(XMLHttpRequest.status);
                        alert(XMLHttpRequest.readyState);
                        alert(textStatus);
                    }
			})
		}
	})

//顶部申请验证，输入不能为空且不能带有空格
//ajax type=post url=url 

	$(".apply-reg button").click(function(){
		var partten = /\s/;
		if(partten.test($(".apply-reg input").eq(0).val()) || $(".apply-reg input").eq(0).val() == ''){
			alert('请输入姓名,且不能带有空格，谢谢!');
			$(".apply-reg input").eq(0).val('');
			$(".apply-reg input").eq(0).get(0).focus();
		}else if(partten.test($(".apply-reg input").eq(1).val()) || $(".apply-reg input").eq(1).val() == ''){
			alert('请输入电话,且不能带有空格，谢谢!');
			$(".apply-reg input").eq(1).val('');
			$(".apply-reg input").eq(1).get(0).focus();
		}else if(partten.test($(".apply-reg input").eq(2).val()) || $(".apply-reg input").eq(2).val() == ''){
			alert('请输入小区名称,且不能带有空格，谢谢!');
			$(".apply-reg input").eq(2).val('');
			$(".apply-reg input").eq(2).get(0).focus();
		}else if(partten.test($(".apply-reg input").eq(3).val()) || $(".apply-reg input").eq(3).val() == ''){
			alert('请输入面积,且不能带有空格，谢谢!');
			$(".apply-reg input").eq(3).val('');
			$(".apply-reg input").eq(3).get(0).focus();
		}else{
			$.ajax({
			     type: 'POST',
			     url: 'test.php',
			     dataType: "html",
			    data: {
			    	action:"register",
			    	userName:$(".apply-reg input").eq(0).val(),
			    	userTel:$(".apply-reg input").eq(1).val(),
			    	userAdress:$(".apply-reg input").eq(2).val(),
			    	userArea:$(".apply-reg input").eq(3).val()
			    },
			    success:function(evt){
			    	alert(evt);
			    },
			    error:function(XMLHttpRequest, textStatus, errorThrown) {
                        alert(XMLHttpRequest.status);
                        alert(XMLHttpRequest.readyState);
                        alert(textStatus);
                    }
			})
		}
	})

//解决IE8-的placeholder兼容问题
	  if( !('placeholder' in document.createElement('input')) ){  
	   
	    $('input[placeholder],textarea[placeholder]').each(function(){   
	      var that = $(this),   
	      text= that.attr('placeholder');   
	      if(that.val()===""){   
	        that.val(text).addClass('placeholder');   
	      }   
	      that.focus(function(){   
	        if(that.val()===text){   
	          that.val("").removeClass('placeholder');   
	        }   
	      })   
	      .blur(function(){   
	        if(that.val()===""){   
	          that.val(text).addClass('placeholder');   
	        }   
	      })   
	      .closest('form').submit(function(){   
	        if(that.val() === text){   
	          that.val('');   
	        }   
	      });   
	    });   
	  }   
//设计师轮播
	$("#design").find("li").hover(function(){
		$(this).find(".pic-bot").css("z-index","3");
	},function(){
		$(this).find(".pic-bot").css("z-index","1");
	})

	$("#design").find("li").click(function(){

		var n = $(this).index();
		switch(n){
			case 0:
			window.open("http://nj.dyrs.com.cn/Designer.asp?tid=2664");
			break;
			case 1:
			window.open("http://nj.dyrs.com.cn/Designer.asp?tid=2286");
			break;
			case 2:
			window.open("http://nj.dyrs.com.cn/Designer.asp?tid=2304");
			break;
			case 3:
			window.open("http://nj.dyrs.com.cn/Designer.asp?tid=2490");
			break;
			case 4:
			window.open("http://nj.dyrs.com.cn/Designer.asp?tid=2275");
			break;
			case 5:
			window.open("http://nj.dyrs.com.cn/Designer.asp?tid=378");
			break;
			case 6:
			window.open("http://nj.dyrs.com.cn/Designer.asp?tid=601");
			break;
			case 7:
			window.open("http://nj.dyrs.com.cn/Designer.asp?tid=78");
			break;
			case 8:
			window.open("http://nj.dyrs.com.cn/Designer.asp?tid=51");
			break;
			case 9:
			window.open("http://nj.dyrs.com.cn/Designer.asp?tid=46");
			break;
		}
	})



//案例轮播
	var time = 2000;
	var n=1;										
	var count= $(".case-pic img").length -1;
	$(".case-pic img:not(:first-child)").hide();   
		
	function autoShow(time){						
		if (n > count) {							
			n= 0;
		}
		$("#case").find('img').fadeOut(time);			
		$("#case").find('img').eq(n).fadeIn(time);
		return ++n;
	}
	var t = setInterval(autoShow,time);

	$(".case-pic img").mouseover(function(){
		clearInterval(t);
	})
	$(".case-pic img").mouseout(function(){
		return t = setInterval(autoShow,time)
	})

	$(".case-pic img").click(function(){
		window.open("http://nj.dyrs.com.cn/case.asp")
	})



//楼盘切换点击
	$("#sign img").click(function(){
		window.open("http://nj.dyrs.com.cn/case.asp");
	})

})