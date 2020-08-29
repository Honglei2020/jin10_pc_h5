function dataJson(data){
    var data_json = data.data;
    console.log(data_json);
    fn(data_json);
}
function fn(data){
    var course_img = document.querySelectorAll('#course_img');
    var course_title = document.querySelectorAll('#course_title');
    var dsp = document.querySelectorAll('#dsp');
    var v_img1 = document.querySelectorAll('#v_img1');
    var v_img2 = document.querySelectorAll('#v_img2');
    var v_course_naem = document.querySelectorAll('#v_course_naem');
    var v_con1 = document.querySelectorAll('#v_con1');
    var v_con2 = document.querySelectorAll('#v_con2');

    for(var i= 0;i<data.length;i++){
        course_title[i].innerHTML = data[i].title;
        course_img[i].innerHTML = data[i].course_img;
        dsp[i].innerHTML = data[i].dsp;
        v_img1[i].src = data[i].v_img1;
        v_img2[i].src = data[i].v_img2;
        v_course_naem[i].innerHTML = data[i].v_course_naem;
        v_con1[i].innerHTML = data[i].v_con1;
        v_con2[i].innerHTML = data[i].v_con2;
    }
}