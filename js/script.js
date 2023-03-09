

$('#slide > div:gt(0)').hide();

setInterval(function(){
    $('#slide > div:first')
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slide');
},1200); /*숫자 속도조절*/

/*
A.append(B)
B.appendTo(A)
 -> A의 마지막에 B를 추가


A.prepend(B)
B.prependTo(A)
 -> A의 처음에 B를 추가
*/