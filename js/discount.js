/*
* @Author: Marte
* @Date:   2017-07-21 15:59:44
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-21 20:51:28
*/

'use strict';
// http://127.0.0.1:3000/api/getdiscountproduct
$(function(){
    var productid = getSearchObj(location.search).productid;
    console.log(productid);
    $.ajax({
        url:"http://127.0.0.1:3000/api/getdiscountproduct",
        data:{"productid": productid},
        success:function(data){
            console.log(data);
            var html = template("proInfo", data);
            $(".main").html(html);
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


});