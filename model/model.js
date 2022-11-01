function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log(hashTag);

    
    if(pageID !="") {
    $.get(`pages/${pageID}/${pageID}.html`, function(data){
        console.log("data" + data);
        $("#app").html(data);
    });
  
    
    
    }else {
    $.get(`pages/home/home.html`, function(data){
        console.log("data" + data);
        $("#app").html(data);
    });
    };
}

