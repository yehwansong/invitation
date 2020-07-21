
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
var isOnIOS = navigator.userAgent.match(/iPad/i)|| navigator.userAgent.match(/iPhone/i);
var eventName = isOnIOS ? "pagehide" : "beforeunload";

window.addEventListener(eventName, function (event) { 
  window.scrollTo(0, 0);
} );
$('document').ready(function(){
        document.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, { passive: false });

  window.scrollTo(0, 0);
  // // var init_scroll = window.scrollTop();
  // console.log(init_scroll)
    var w = window.innerWidth
    var h = window.innerHeight
var img_1_out = false
var img_2_out = false
var img_3_out = false
var img_4_out = false
var img_5_out = false
var img_6_out = false
var offleft = $('#drawing_wrap').offset().left
function img_1(){
    img_1_out = true
    for(var i = 1; i < 6; i++) { line(i) }
    function line(i) {
        setTimeout(() => {
            $('.img_1_elem_'+i).removeClass('img_1_ani')
        }, i*100);
    }
}
var moving_counter = 0

function img_2(){
    img_2_out = true
    $('.img_2_elem').removeClass('img_2_ani')
}
var img_3_blinking_counter = 0

function img_3(){
    img_3_out = true
                    $('.img_3_elem').removeClass('img_3_ani')
    // img_3_blinking()
}
function img_3_blinking(){
    img_3_blinking_counter++
    $('.img_3_elem').removeClass('img_3_ani')
    $('.img_3_elem_'+((img_3_blinking_counter%12) + 1)).addClass('img_3_ani')
    setTimeout(function(){
        img_3_blinking()
    },200)
}

function img_4(){
    img_4_out = true
    $('.img_4_ani').removeClass('img_4_ani')
}
function img_5(){
    img_5_out = true
    $('.img_5_ani').removeClass('img_5_ani')
}
function img_6(){
    img_6_out = true
    $('.img_6_ani').removeClass('img_6_ani')
}
function moving(){
    if(moving_counter > 30 && !img_1_out){
        img_1()
    }
    if(moving_counter > 90 && !img_2_out){
        img_2()
    }
    if(moving_counter > 150 && !img_3_out){
        img_3()
    }
    if(moving_counter > 210 && !img_4_out){
        img_4()
    }
    if(moving_counter > 270 && !img_5_out && !img_6_out){
        img_5()
    }

}
if(w/h<=3/4){
    $('.img_5').attr('src','poster/elem_5_mobile.png')
    $('.img_6').attr('src','poster/elem_6_mobile.png')
}
// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();
//     if(scroll > 0.5*h && !img_1_out){
//         img_1()
//     }
//     if(scroll > 2.5*h && !img_2_out){
//         img_2()
//     }
//     if(scroll > 4.5*h && !img_3_out){
//         console.log(';lkj')
//         img_3()
//     }
//     if(scroll > 6.5*h && !img_4_out){
//         img_4()
//     }
//     if(scroll > 7.5*h && !img_5_out && !img_6_out){
//         img_5()
//         img_6()
//     }
// });



    var el = document.getElementById('c');

    var ctx = el.getContext('2d');
    el.width  = w;
    el.height = h;
    ctx.imageSmoothingEnabled = false;

function distanceBetween(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}
function angleBetween(point1, point2) {
  return Math.atan2( point2.x - point1.x, point2.y - point1.y );
}
    var isDrawing, lastPoint;
    if(isMobile){
        jQuery('#cursor').css({'opacity':0})
        el.ontouchstart = function(e) {
            $('.drawing').hide()
            jQuery('#cursor').css({'opacity':0})
            isDrawing = true;
            lastPoint = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            var currentPoint = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        
            var img = document.getElementById('icon');
            x = lastPoint.x -img.width/2;
            y = lastPoint.y -img.height/2;
            ctx.drawImage(img, x+10, y+10, img.width/2, img.height/2)
        };
        el.ontouchmove = function(e) {
        if (!isDrawing) return;
            moving_counter++
            console.log(moving_counter)
            moving()
        
        var currentPoint = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        var dist = distanceBetween(lastPoint, currentPoint);
        var angle = angleBetween(lastPoint, currentPoint);
        
        for (var i = 0; i < dist; i+=1) {
            var img = document.getElementById('icon');
            x = lastPoint.x + (Math.sin(angle) * i)-img.width/2;
            y = lastPoint.y + (Math.cos(angle) * i)-img.height/2;
            ctx.drawImage(img, x+10, y+10, img.width/2, img.height/2)
        }
        
            lastPoint = currentPoint;
        };
        el.ontouchend = function() {
            jQuery('#cursor').css({'opacity':0})
            isDrawing = false;
        };

    }else{
        el.onmousedown = function(e) {
            jQuery('#cursor').css({'opacity':0})
            isDrawing = true;
            lastPoint = { x: e.clientX - offleft, y: e.clientY };
            var currentPoint = { x: e.clientX - offleft, y: e.clientY };
        
            var img = document.getElementById('icon');
            x = lastPoint.x -img.width/2;
            y = lastPoint.y -img.height/2;
            ctx.drawImage(img, x, y, img.width, img.height)
        };

        el.onmousemove = function(e) {
            console.log(e.clientX-offleft+"px")
    $('#icon').css('left',e.clientX-offleft+"px");
    $('#icon').css('top',e.clientY+"px");
        if (!isDrawing) return;
            moving_counter++
            console.log(moving_counter)
            moving()
        
        var currentPoint = { x: e.clientX-offleft, y: e.clientY };
        var dist = distanceBetween(lastPoint, currentPoint);
        var angle = angleBetween(lastPoint, currentPoint);
        
        for (var i = 0; i < dist; i+=1) {
            var img = document.getElementById('icon');
            x = lastPoint.x + (Math.sin(angle) * i)-img.width/2;
            y = lastPoint.y + (Math.cos(angle) * i)-img.height/2;
            ctx.drawImage(img, x, y, img.width, img.height)
        }
        
            lastPoint = currentPoint;
        };

        el.onmouseup = function() {
            jQuery('#cursor').css({'opacity':1})
            isDrawing = false;
        };
    }

  $(document).mousemove(function(e){
  });
})