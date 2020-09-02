window.addEventListener('load',function(){
    var video_mask = document.querySelectorAll('.video-mask');
    var mask_big = document.querySelector('.mask-big')
    for(var i=0;i<video_mask.length;i++){
        video_mask[i].addEventListener('click',function(){
        mask_big.style.display = 'block';
        })
    }
    mask_big.addEventListener('click',function(){
        mask_big.style.display = 'none';
    })


    // var url = "./data.json"
    // var request = new XMLHttpRequest();
    // request.open("get",url);
    // request.send(null);
    // request.onload = function(){
    //     if(request.status == 200){
    //         var json = JSON.parse(request.responseText);
    //         console.log(json.data);
    //         // fn(json.data)
    //     }
    // }
})