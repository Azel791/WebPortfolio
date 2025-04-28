$(document).ready(function(){

    /*
    $(window).on('on',responsivePage());

    $("iframe").load(function(){
        $(this).height($(this).content().height());
        $(this).width($(this).content().width());
    });

    */

    $("button.dropDown").click(function(){
        $("div.mobNavList").css("display","block");
        $("div.mobNavList").css("transition","1s ease-in-out");
        $(".mobNav").css("height","200px");
        $(".mobNav").css("transition","1s ease-in-out");
        $("button.dropDown").css("display","none");
        $("h1#pageName").css("display","none");
    });
    $("a").click(function(){
        $("div.mobNavList").css("display","none");
        $(".mobNav").css("height","40px");
        $("button.dropDown").css("display","block");
        $("h1#pageName").css("display","block");
        
        $clicked = $(this).text();
        $("h1#pageName").text($clicked);

        /*
        switch($clicked){
            case "Homepage":
                $("body").css("height","110vh");
                $("div.bodyCont").css("height","50em");
            break;
            case "About":
                $("body").css("height","120vh");
                $("div.bodyCont").css("height","60em");
            break;
            case "Projects":
                $("body").css("height","110vh");
                $("div.bodyCont").css("height","50em");
            break;
            case "Quizzes":
                $("body").css("height","120vh");
                $("div.bodyCont").css("height","50em");
            break;

        }
            */

    });
});


function autoResize($height){
    $(this).height($(this).content().height());

    $("div.bodyCont").css("height",$height + "px");

}