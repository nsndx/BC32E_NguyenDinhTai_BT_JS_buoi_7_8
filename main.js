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
    var soN = document.querySelector('.top input').value
    if (soN == '') { } else {
        myArray.push(' ' + Number(soN))
        document.querySelector('.top input').value = ''
    }
    document.querySelector('.top .soThem').innerHTML = myArray
}


//bài 1: Tổng các số dương trong mảng.
document.getElementById('btn_bai1').onclick = function () {
    var kqBai1 = 0;
    if (myArray == '') {
        kqBai1 = 'Mảng rỗng'
    } else {
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i] > 0) {
                kqBai1 += Number(myArray[i])
            }
        }
        kqBai1 = 'Tổng các số dương bằng: ' + kqBai1
    }
    document.querySelector('.main .kqBai1').innerHTML = kqBai1
}

// Bài 2: Đếm có bao nhiêu số dương trong mảng.
document.getElementById('btn_bai2').onclick = function () {
    var kqBai2 = 0;
    if (myArray == '') {
        kqBai2 = 'Mảng rỗng'
    } else {
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i] > 0) {
                kqBai2++
            }
        }
        kqBai2 = 'Số số dương trong mảng là: ' + kqBai2
    }
    document.querySelector('.main .kqBai2').innerHTML = kqBai2
}

//bài 3: Tìm số nhỏ nhất trong mảng.
document.getElementById('btn_bai3').onclick = function () {
    var kqBai3 = 0;
    if (myArray == '') {
        kqBai3 = 'Mảng rỗng'
    } else {
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
        kqBai3 = 'Số nhỏ nhất là: ' + kqBai3
    }
    document.querySelector('.main .kqBai3').innerHTML = kqBai3
}

// Bài 4: Tìm số dương nhỏ nhất trong mảng.
document.getElementById('btn_bai4').onclick = function () {
    var kqBai4 = 0;
    if (myArray == '') {
        kqBai4 = 'Mảng rỗng'
    } else {
        var myArray1 = []
        for (i = 1; i < myArray.length; i++) {
            if (myArray[i] > 0) {
                myArray1.push(myArray[i])
            }
        }
        for (i = 0; i < myArray1.length; i++) {
            var checkSNN = true
            for (j = 0; j < myArray1.length; j++) {
                if (myArray1[i] - myArray1[j] > 0) {
                    checkSNN = false
                }
            }
            if (checkSNN) {
                kqBai4 = myArray1[i]
                break;
            }
        }
        kqBai4 = 'Số dương nhỏ nhất là: ' + kqBai4
    }
    document.querySelector('.main .kqBai4').innerHTML = kqBai4
}
