/*
* @Author: Marte
* @Date:   2017-07-21 10:20:47
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-22 09:18:39
*/

'use strict';
// http://127.0.0.1:3000/api/getinlanddiscount
$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getinlanddiscount",
        success:function  (data) {
            console.log(data);
            console.log(data.result.length);

            var newArr ,
            i;
            // for(i=0; i<data.result.length; i++){
            //     newArr[i] = data.result[i];
            // }

            console.log(data.result[0]);
            // console.log(newArr);
            var html = template("pList", data);
            $(".list").html(html);
            var docHeight = $(document).height();
            $(document).scroll(function() {
                // console.log("3333");
                var scrollTop= $(document).scrollTop();
                console.log(scrollTop);
                console.log(docHeight);
                if( scrollTop >= docHeight/3*2 ){
                    // console.log("gggg");

                }
            });
        }
    });
});





// ajax_json({
//             type:"get",
//             url:"http://127.0.0.1:3000/api/getinlanddiscount",
//             data:{},
//             dataType:"json",
//             success:function(data){
//                 console.log(data);
//                 var html = template("inland",data);
//                 var main = document.getElementsByTagName("main")[0];
//                 main.innerHTML += html;
//                 bodyOff = document.body.offsetHeight;
//                 var h = 0;
//                 var flag = true;
//                 window.onscroll = function(){
//                     h >= 20 ? h=0 : h ;
//                     var off = document.body.scrollTop;
//                     if((bodyOff / 10) * 8 < off && flag){
//                         flag = false;
//                         ajax_json({
//                             type:"get",
//                             url:"http://127.0.0.1:3000/api/getinlanddiscount",
//                             data:{},
//                             dataType:"json",
//                             success:function(data2){
//                                 var data3 = data2.result;
//                                 var obj = {result:[]};
//                                 var arr = [];
//                                 var one = 0;
//                                 for(h;h<20;h++){
//                                     one++;
//                                     arr.push(data3[h]);
//                                     if(one === 10){
//                                         break;
//                                     }
//                                 }
//                                 obj.result = arr;
//                                 var html = template("inland",obj);
//                                 var main = document.getElementsByTagName("main")[0];
//                                 main.innerHTML += html;
//                                 setTimeout(function(){
//                                     flag = true;
//                                     bodyOff = document.body.offsetHeight;
//                                 },500)
//                             }
//                         });
//                     }
//                 }
//             }
//         });
