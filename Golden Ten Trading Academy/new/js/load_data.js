
function dataJson(data) {
    var data_json = data.data;
    console.log(data_json);
    load_data(data_json);
}

function load_data(data) {
    var title = document.querySelectorAll('#title');
    var course_video = document.querySelectorAll('.course-video');
    var con_dsp = document.querySelectorAll('.con_dsp');
    var bd_title = document.querySelectorAll('.bd-title');
    // var bd_video1 = document.querySelectorAll('.bd-video1');
    // var bd_video2 = document.querySelectorAll('.bd-video2');
    var video_dsp1 = document.querySelectorAll('#video-dsp1');
    var video_dsp2 = document.querySelectorAll('#video-dsp2');

    for (var i = 0; i < 3; i++) {
        title[i].innerText = data[i].title;
        con_dsp[i].innerText = data[i].dsp;
        bd_title[i].innerText = data[i].v_course_naem;
        video_dsp1[i].innerText = data[i].v_con1;
        video_dsp2[i].innerText = data[i].v_con2;
        // course_video[i].style.background = "url(" + data[2].course_img + ") no-repeat ";
    }
}
