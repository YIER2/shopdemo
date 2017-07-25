/*
* @Author: Marte
* @Date:   2017-07-17 15:14:01
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-18 13:33:36
*/

$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getcategorytitle",
        success: function(data){
            console.log(data);
            var html = template("nav",data);
            $(".nav").html(html);
            $(".item").click(function() {
                var that = this;
                var titleid = this.id;
                console.log(titleid);
                $.ajax({
                    url:"http://127.0.0.1:3000/api/getcategory",
                    data:{titleid:parseInt(titleid)},
                    success: function(data){
                        console.log(data);
                        var html = template("bar",data);
                        $(that ).find(".box1").html(html).toggle(200);
                        var bro = $(that ).siblings();
                        $(bro).find(".box1").css({
                            display: 'none'
                        });
                    }

                });

            });
        }
    });
});

