$("button").click(function(){
    let message=$(".userComment").val();
    $(".messages").text(message);    
    alert("你已经成功提交")
});
