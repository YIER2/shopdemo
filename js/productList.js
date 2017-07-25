/*
* @Author: Marte
* @Date:   2017-07-18 13:52:32
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-19 10:11:24
*/

$(function(){
    //把地址里的数据转化为对象
     var a= location.search.slice(1).split("&");
     var obj ={};
     for (var i = 0 ;i< a.length;i++){
        var tempArr = a[i].split('=');
        obj[tempArr[0]] = tempArr[1]
     }
     var categoryid = obj.categoryid || 0;
     var pageid = obj.pageid || 1 ;






     //设置三级标签栏
     $.ajax({
        url:"http://127.0.0.1:3000/api/getcategorybyid",
        data: {"categoryid" : categoryid},
        success: function(data){
            // console.log(data);
            var html = template("tvId", data);
            $('.tv').html(html);
        }
     });
     //产品列表
     $.ajax({
        url:"http://127.0.0.1:3000/api/getproductlist",
        data:{
            "categoryid": categoryid,
            "pageid":pageid,
            },
        success:function  (data) {
            console.log(data);
            var page = Math.ceil(data.totalCount / data.pagesize);
            console.log(page);
            console.log(pageid);
            var pageOption = "";
            for(var i=1; i<=page;i++){
                console.log(i == pageid)
                var url = "productList.html?categoryid=" + categoryid + "&pageid=" + (i );
                pageOption += "<option value="+url+ '  ' +  ((i==pageid) ? 'selected':'')  +   ">第"+(i)+"页</option>";
            }
            $("select").html(pageOption);

            var prevpageid = pageid - 1;
            var nextpageid = pageid - 0 + 1;
            if(pageid <= 1){
                var prevpageid = 1;

            }else if(pageid >= page){
                var nextpageid = pageid;
            }
            console.log(page);
            console.log(pageid);
            var prvUrl = "productList.html?categoryid="+categoryid+"&pageid="+prevpageid;
            console.log(prvUrl);
            var nextUrl = "productList.html?categoryid="+categoryid+"&pageid="+nextpageid;


            $(".prv >a").attr("href",prvUrl);
            $(".next >a").attr("href",nextUrl);


            var html = template("productList", data);
            $(".productList").html(html);
        }
     });

     //翻页效果
     // console.log(obj.pageid);

 });


