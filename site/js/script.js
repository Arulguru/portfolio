$(".homecontents").on("mouseenter",function(){
	$(this).animate({'font-size':'18px','border':'4px solid #5c5c5c '});
	$(this).filter("h4").css({'background-color':'#5c5c5c','font-weight':'bold'},fast)
	
})
$(".homecontents").on("mouseleave",function() {
	$(this).css({'font-size':'16px','border':'1px solid white'});
})








$("#BlockchainBasics").click(function(){
	$("#certificateBox").html("<img src='Images/BlockchainBasics.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#smct").click(function(){
	$("#certificateBox").html("<img src='Images/smartContracts.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#dapp").click(function(){
	$("#certificateBox").html("<img src='Images/DApps.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#js").click(function(){
	$("#certificateBox").html("<img src='Images/introToJS.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#fullstack").click(function(){
	$("#certificateBox").html("<img src='Images/html,css,js.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})

$("#py").click(function(){
	$("#certificateBox").html("<img src='Images/SKILLRACK_PY.png' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#java").click(function(){
	$("#certificateBox").html("<img src='Images/SKILLRACK_JAVA.png' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#sql").click(function(){
	$("#certificateBox").html("<img src='Images/sql.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#c").click(function(){
	$("#certificateBox").html("<img src='Images/SKILLRACK_C.png' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#dsa").click(function(){
	$("#certificateBox").html("<img src='Images/ds.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})




$("#ibec").click(function(){
	$("#project").load("/portfolio/site/Ibec.html")
	$("img").css({"width":"60%"})
});

$("#bgss").click(function(){
	$("#project").load("/portfolio/site/Bgss.html")
});