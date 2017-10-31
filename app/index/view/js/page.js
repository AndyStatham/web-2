//分页控件单击事件
function pageClick(callBack) {
    $(".test1234 ").on("click", "a", function () {
        alert("11")
        var id = $(this).attr("id");
        alert(id)
        if ($("#"+id).html() == pageIndex) {
            return;
        }
        if (id == "prev") {
            pageIndex--;
        }
        else if (id == "next") {
            pageIndex++;
        }
        else {
            pageIndex = $("#"+id).html();
        }
        pageIndex = parseInt(pageIndex);
        if (pageIndex < 1 || pageIndex > pageCount) {
            return;
        }
        callBack();
    });
}

//刷新分页控件
function pageRefresh(callBack) {
    $("#pagedes").html("共<a>" + recordCount + "</a>条数据");
    if (recordCount > 0) {
        // if (recordCount % pageSize == 0) {
        //     pageCount = recordCount / pageSize;
        // } else {
        //     pageCount = (recordCount - recordCount % pageSize) / pageSize + 1;
        // }
        pageCount = Math.ceil(recordCount / pageSize);
        pageIndex = parseInt(pageIndex);
        // if (pageIndex < 1) {
        //     pageIndex = 1;
        // } else if (pageIndex > pageCount) {
        //     pageIndex = pageCount;
        // }
        //
        switch(pageIndex) {
            case pageIndex < 1:pageIndex = 1;
            break;
            case pageIndex > pageCount: pageIndex = pageCount;
            break
        }
        var pagelist = "";
        if (pageIndex == 1) {
            pagelist = "<span  class='prev-disabled'>&laquo;<b></b></span> " + "<a id='1'>1</a> ";

            alert(pageIndex)
        }
        else {
            pagelist = "<a id='prev' class='prev' href='javascript:void(0)'>&laquo;<b></b></a> " + "<a id='1' href='javascript:void(0)'>1</a> ";
        }
        if (pageIndex - 2 > 2) {
            pagelist += "<span class='text'>...</span> ";
        }
        if (1 < pageIndex - 2 && pageIndex - 2 < pageCount) {
            pagelist += "<a id='" + (pageIndex - 2) + "' href='javascript:void(0)'>" + (pageIndex - 2) + "</a> ";
        }
        if (1 < pageIndex - 1 && pageIndex - 1 < pageCount) {
            pagelist += "<a id='" + (pageIndex - 1) + "' href='javascript:void(0)'>" + (pageIndex - 1) + "</a> ";
        }
        if (1 < pageIndex && pageIndex < pageCount) {
            pagelist += "<a id='" + pageIndex + "'>" + pageIndex + "</a> ";
        }
        for (var i = pageIndex + 1; i < pageCount && i <= pageIndex + 2; i++) {
            pagelist += "<a id='" + i + "' href='javascript:void(0)'>" + i + "</a> ";
        }
        if (pageIndex + 3 < pageCount) {
            pagelist += "<span class='text'>...</span> ";
        }
        if (pageIndex < pageCount) {
            pagelist += "<a id='" + pageCount + "' href='javascript:void(0)'>" + pageCount + "</a> " + "<a id='next' href='javascript:void(0)' class='next'>下一页<b></b></a>";
        }
        else if (pageIndex > 1) {
            pagelist += "<a id='" + pageCount + "'>" + pageCount + "</a> " + "<span class='next-disabled'>下一页<b></b></span>";
        }
        else {
            pagelist += "<span class='next-disabled'>下一页<b></b></span>";
        }
        $("#page").html(pagelist);
        $("#" + pageIndex).addClass("current");
        pageClick(callBack);
    }
    else {
        $("#page").empty();
    }
}



