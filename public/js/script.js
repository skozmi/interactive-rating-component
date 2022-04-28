$(document).ready(function()
{
    $(".rating-btn").click((event)=>{      
        if($(event.target).hasClass('checked')){
            $(".rating-btn").removeClass("checked");
            location.reload();
        } else {
            $(".rating-btn").removeClass("checked");
            $(event.target).addClass("checked");
            let ratingValue = $(".checked").val();
            $("#ratingInput").attr("value", ratingValue);
        }
    });
});