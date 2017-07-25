/*
* @Author: Marte
* @Date:   2017-07-16 11:44:27
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-16 21:28:39
*/

$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getindexmenu",
        success:function(data){
            var html = template("menu", data);

            $('#nav').html(html);
            $("#nav li:nth-child(8)").click(function() {
                $("#nav li:nth-last-child(-n+4)").toggle(200);
            });
        }
    });
    $.ajax({
        url:"http://127.0.0.1:3000/api/getmoneyctrl",
        success:function(data){
            var html = template("productList",data);
            $("#p_content").html(html);

        }
    });
});