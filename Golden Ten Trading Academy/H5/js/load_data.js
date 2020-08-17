window.onload =  function(){
    var url = "./data.json"
    var request = new XMLHttpRequest();
    request.open("get",url);
    request.send(null);
    request.onload = function(){
        if(request.status == 200){
            var json = JSON.parse(request.responseText);
            console.log(json.data);
            // console.log(json.data[0].title);
            fn(json.data)
        }
    }
    var d_titles = document.querySelectorAll('.d_title');
    var d_dsps = document.querySelectorAll('.d_dsp');
    var d_courses = document.querySelectorAll('.d_course');
    var d_con1s = document.querySelectorAll('.d_con1');
    var d_con2s = document.querySelectorAll('.d_con2');
    var trr_buys = document.querySelectorAll('button');
    var url_links = document.querySelectorAll(".url_link");
    function fn(data){  
        for(var i=0;i<3;i++){
            var index = i;
            d_titles[index].innerHTML = data[index].title;
            d_dsps[index].innerHTML = data[index].dsp;
            d_courses[index].innerHTML = data[index].course;
            d_con1s[index].innerHTML = data[index].v_con1;
            d_con2s[index].innerHTML = data[index].v_con2;
            for(var j=0;j<url_links.length;j++){
                url_links[j].onclick = function(){
                    window.location.href=" https://school.jin10.com/course/mobile/75 ";
                }
            }
        }
    }


    
}