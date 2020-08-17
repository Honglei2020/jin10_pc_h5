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
        var url_links = document.querySelectorAll("button");

        var c_vdeio = document.querySelectorAll(".c_vdeio");
        var c_number = document.querySelectorAll(".c_number");
        var v_left = document.querySelectorAll(".v_left");
        var v_right = document.querySelectorAll(".v_right");
    function fn(data){  
        for(var i=0;i<3;i++){
            var index = i;
            // var num = i+1;
            d_titles[index].innerHTML = data[index].title;
            d_dsps[index].innerHTML = data[index].dsp;
            d_courses[index].innerHTML = data[index].course;
            d_con1s[index].innerHTML = data[index].v_con1;
            d_con2s[index].innerHTML = data[index].v_con2;
            console.log(data[index].course_img);
            c_vdeio[index].style.backgroundImage = "url("+ data[index].course_img +")";
            c_number[index].style.backgroundImage = "url("+ data[index].course_number_img +")";
            v_left[index].style.backgroundImage = "url("+ data[index].v_img1 +")";
            v_right[index].style.backgroundImage = "url("+ data[index].v_img2 +")";
            for(var j=0;j<url_links.length;j++){
                url_links[j].onclick = function(){
                    window.location.href=" https://school.jin10.com/course/mobile/75 ";
                }
            }
        }
    }



    var c_playing = document.querySelectorAll(".c_playing");
    var showvideo = document.querySelector(".video");
    var video = document.querySelector("video");
    for(var i=0;i<c_playing.length;i++){
        c_playing[i].onclick = function(){
            showvideo.style.display = "flex";
        }
    }
    

    var close = document.querySelector(".close");
    close.onclick=function(){
        showvideo.style.display = "none";
        video.pause();
    }

}