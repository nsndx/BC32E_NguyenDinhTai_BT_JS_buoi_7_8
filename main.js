var title = document.querySelectorAll('.title')
var iconUp = document.querySelectorAll('.title .fa-angle-up')
var iconDown = document.querySelectorAll('.title .fa-angle-down')
var main = document.querySelectorAll('.main')
function list(index) {
    if (main[index].style.display == 'block') {
        for (i = 0; i < title.length; i++) {
            main[i].style.display = 'none'
        }
        title[index].style.backgroundColor = '#fff'
        iconUp[index].style.display = 'none'
        iconDown[index].style.display = 'block'

    } else {
        for (i = 0; i < title.length; i++) {
            main[i].style.display = 'none'
            iconUp[i].style.display = 'none'
            iconDown[i].style.display = 'block'
            title[i].style.backgroundColor = '#fff'
        }
        main[index].style.display = 'block'
        iconUp[index].style.display = 'block'
        iconDown[index].style.display = 'none'
        title[index].style.backgroundColor = '#51ccf1'
    }
}
title[0].onclick = function () {
    list(0)
}
title[1].onclick = function () {
    list(1)
}
title[2].onclick = function () {
    list(2)
}
title[3].onclick = function () {
    list(3)
}
title[4].onclick = function () {
    list(4)
}
title[5].onclick = function () {
    list(5)
}
title[6].onclick = function () {
    list(6)
}
title[7].onclick = function () {
    list(7)
}
title[8].onclick = function () {
    list(8)
}
title[9].onclick = function () {
    list(9)
}

var myArray = []
document.querySelector('.top button').onclick = function () {
    var soN = Number(document.querySelector('.top input').value)
    myArray.push(' ' + soN)
    document.querySelector('.top .soThem').innerHTML = myArray
}


//bài 1: Tổng các số dương trong mảng.
document.getElementById('btn_bai1').onclick = function () {
    var kqBai1 = 0;
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            kqBai1 += Number(myArray[i])
        }
    }
    document.querySelector('.main .kqBai1').innerHTML = kqBai1
}

// Bài 2: Đếm có bao nhiêu số dương trong mảng.
document.getElementById('btn_bai2').onclick = function () {
    var kqBai2 = 0;
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            kqBai2++
        }
    }
    document.querySelector('.main .kqBai2').innerHTML = kqBai2
}

//bài 3: Tìm số nhỏ nhất trong mảng.
document.getElementById('btn_bai3').onclick = function () {
    var kqBai3 = 0;
    for (i = 0; i < myArray.length; i++) {
        var checkSNN = true
        for (j = 0; j < myArray.length; j++) {
            if (myArray[i] - myArray[j] > 0) {
                checkSNN = false
            }
        }
        if (checkSNN) {
            kqBai3 = myArray[i]
            break;
        }
    }
    document.querySelector('.main .kqBai3').innerHTML = kqBai3
}
