$(".homecontents").hover(function(){
	$(this).animate({'font-size':'18px','border':'4px solid #5c5c5c ','font-weight':'bold'});
	$(this).filter("h4").css({'background-color':'#5c5c5c','font-weight':'bold'});
	console.log(this);
	
})






$("#bchSpe").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/blockchainSpecialization.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#BlockchainBasics").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/BlockchainBasics.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#smct").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/smartContracts.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#dapp").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/DApps.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#bchPlatforms").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/blockchainPlatform.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#js").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/introToJS.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#fullstack").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/html,css,js.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})

$("#py").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/SKILLRACK_PY.png' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#java").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/SKILLRACK_JAVA.png' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#sql").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/sql.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#c").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/SKILLRACK_C.png' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})
$("#dsa").click(function(){
	$("#certificateBox").html("<img src='Images/Certifications/ds.jpg' style='width: 100%; border: 1px solid white; padding: 5px'></img>");
})




$("#ibec").click(function(){
	$("#project").load("/portfolio/site/Ibec.html")
	$("img").css({"width":"60%"})
});

$("#bgss").click(function(){
	$("#project").load("/portfolio/site/Bgss.html")
});