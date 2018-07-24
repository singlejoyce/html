/* 
   var txt=document.getElementById("txt");
   var set={
    changeColor:function(){
        txt.style.color="red";
        txt.style.backgroundColor="#ccc";
    },
    changeSize:function(){
        txt.style.width="300px";
        txt.style.height="300px";
    },
    objHide:function(){
        txt.style.display="none";
    },
    objShow:function(){
        txt.style.display="block";
    },
    offSet:function(){
        var message=confirm("你确定要重置所有设置么？");
        if(message==true){
            txt.removeAttribute('style');
        }
    }
  } */


	function openWindow(){    
		var net_baidu="http://www.baidu.com";
		var net_imooc="http://www.imooc.com";
		var ok=confirm("是否要打开imooc的网页？");
		if(ok){
			Wopen(net_imooc);
		}else{
			Wopen(net_baidu);
		}
	}
		
	function Wopen(net){
		var wz=prompt("输入网址：",net);
		if(wz!=""&&wz!=null){
			if(wz==net){
				window.open(wz,'_blank','width=600,height=400,top=100')			
			}else{
				alert("输入的网址与默认不符，请再次确认!")    
			}
		}else{
			alert("输入的网址为空!")    
		}
	}
	
    function changeContent(){ 
		var mychar=document.getElementById("mycon") ;
		if(mychar != null){
			//document.write("原标题:"+mychar.innerHTML+"<br>"); //输出原h2标签内容
			mychar.innerHTML = "NEW TEST!";
			//document.write("修改后的标题:"+mychar.innerHTML); //输出修改后h2标签内容
		}
	}
	
    function setStyle(myid,mystyle){ 
		var mychar=document.getElementById(myid) ;
		if(mychar != null){
			mychar.className=mystyle;
		}
	}
	
    function offSet(){
		var mychar=document.getElementById("mycon") ;
        var message=confirm("你确定要重置所有设置么？");
        if(message==true & mychar != null){
            mychar.removeAttribute('style');
        }
    }
	
    function hidetext(){  
		var my_pchar=document.getElementById("mypcon") ;
        if(my_pchar != null){
			my_pchar.style.display="none";
		}
	}  
	function showtext(){  
		var my_pchar = document.getElementById("mypcon");
        if(my_pchar != null){
			my_pchar.style.display="block";
		}
	}
