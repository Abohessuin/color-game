var col=generaterandcol(6)
var squ=document.querySelectorAll(".squ");
var sp1=document.querySelector("#sp1");
var sp2=document.querySelector("#sp2");
var pickedcol=pick_rand_color();
var h1=document.querySelector("h1");
var bt1=document.querySelector("#bt1");
var bt2=document.querySelector("#bt2");
var bt3=document.querySelector("#bt3");
bt2.addEventListener("click",hard_mod);
bt3.addEventListener("click",easy_mod);
function hard_mod() 
{
	bt2.classList.add("choose");
	bt3.classList.remove("choose");
	col=generaterandcol(6);
    pickedcol=pick_rand_color();
	sp1.textContent=pickedcol;
	for (var i = 0; i < squ.length; i++) 
	{
	   	   squ[i].style.background=col[i];
	   	   squ[i].style.display="block";
	}
}
function easy_mod()
{
	bt3.classList.add("choose");
	bt2.classList.remove("choose");
	col=generaterandcol(3);
    pickedcol=pick_rand_color_2();
	sp1.textContent=pickedcol;
	for (var i = 0; i < squ.length; i++) 
	{
	   if (i<3) 
	   {
	   	   squ[i].style.background=col[i];
	   }
	   else
	   {
	   	  squ[i].style.display="none";
	   }
	}

}
sp1.textContent=pickedcol;
bt1.addEventListener("click",bt1_ch);
function bt1_ch() 
{
	col=generaterandcol(6);

	pickedcol=pick_rand_color();

    sp1.textContent=pickedcol;
for (var i = 0; i < squ.length; i++) 
	{
		squ[i].style.background=col[i];
	}

	h1.style.background="steelblue";
 }  
for(var i=0;i<squ.length;i++)
{
	squ[i].style.background=col[i];
	squ[i].addEventListener("click",cli_squ);

	function cli_squ() 
	{
		var clickcol=this.style.background;
		if (pickedcol==clickcol) 
		{
			
			sp2.textContent="correct!";
			changecolor(clickcol);
			h1.style.background=pickedcol;
			bt1.textContent="play again?";
		}
		else
		{
		   
		   this.style.background="#232323";
		   sp2.textContent="try again!";
		}
	}
}


function changecolor(color) 
{
	for (var i = 0; i < squ.length; i++) 
	{
		squ[i].style.background=color;
	}
}


function pick_rand_color() 
{
	var random=Math.floor(Math.random()*6);
	return col[random];
}
function pick_rand_color_2() 
{
	var random=Math.floor(Math.random()*3);
	return col[random];
}


function generaterandcol(num)
{
     
     var arr= [];
     for (var i = 0; i < num; i++) 
     {
       arr.push(randcol());
     }

     return arr;

}


function randcol()
{
	var r=Math.floor(Math.random()*256);
	
	var g=Math.floor(Math.random()*256);
	
	var b=Math.floor(Math.random()*256);

   return "rgb("+r+", "+g+ ", "+ b +")" ;
}

