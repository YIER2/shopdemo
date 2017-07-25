/*
* @Author: Marte
* @Date:   2017-07-19 11:06:26
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-19 21:40:32
*/

'use strict';
$(function(){
    //设置三级标签栏
    //http://127.0.0.1:3000/api/getproduct
    var obj = getSearchObj(location.search);
    var productid = obj.productid;
    console.log(productid);
     $.ajax({
        url:"http://127.0.0.1:3000/api/getproduct",
        data: {"productid" : productid},
        success: function(data){
            console.log(data);
            // console.log(data.result[0].categoryId);
            var categoryId = data.result[0].categoryId;
            // var productId = data.result[0].productId;
            // console.log(categoryId);
            // console.log(productId);
             //产品信息
            var html = template("tvId", data);
            $(".productInfo").html(html);
            $.ajax({
                url:"http://127.0.0.1:3000/api/getcategorybyid",
                data:{"categoryid" : categoryId},
                success: function  (data) {
                    console.log(data);

                    //添加三家导航
                    $(".productidID").html(data.result[0].category);
                    // $(".productidID").html(productId);

                }

            });

            //评论信息

        }
     });

     $.ajax({
        url:"http://127.0.0.1:3000/api/getproductcom",
        data:{"productid":productid},
        success:function  (data) {
            var html = template("commentAA", data);
            $(".comment").html(html);
        }

     });



     //获取地址栏的数据返回一个对象
     function getSearchObj(str){
        var a = str.slice(1).split("&"),
        obj = {},
        i,
        tempArr;

        for(i=0; i< a.length; i++ ){
            tempArr = a[i].split('=');
            obj[tempArr[0]] = tempArr[1];
            return obj;
        }
     };



     // var a= location.search.slice(1).split("&");
     // var obj ={};
     // for (var i = 0 ;i< a.length;i++){
     //    var tempArr = a[i].split('=');
     //    obj[tempArr[0]] = tempArr[1]
     // }
     // var categoryid = obj.categoryid || 0;
});