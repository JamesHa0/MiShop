window.onload = function () {

    //头部菜单：购物车的显示与隐藏
    let cart = document.getElementById("cart");
    let cartBox = document.getElementById("cartbox");

    cart.onmouseover = function () {
        cartBox.style.display = "block";
    }
    cart.onmouseout = function () {
        cartBox.style.display = "none";
    }



    //navi-mid部分的隐藏层

    let naviMidLiArr = document.getElementsByClassName("navi-mid-li");
    let goodsArr = document.getElementsByClassName("navi")[0].getElementsByClassName("goods");
    for (let i = 0; i < goodsArr.length; i++) {
        naviMidLiArr[i].onmouseover = function () {
            goodsArr[i].style.display = "block";
        }
        naviMidLiArr[i].onmouseout = function () {
            goodsArr[i].style.display = "none";
        }
    }




    //横幅广告
    let bannerUl = document.getElementById('bannerUl');
    let bannerLiArr = bannerUl.getElementsByTagName('li');
    let bannerBoxArr = bannerUl.getElementsByClassName('banner-box');
    for (let i = 0; i < bannerLiArr.length; i++) {
        bannerLiArr[i].onmouseover = function () {
            bannerBoxArr[i].style.display = 'block';
        }
        bannerLiArr[i].onmouseout = function () {
            bannerBoxArr[i].style.display = 'none';
        }
    }



    //轮播图
    let imgArr = document.getElementById("lunbo").getElementsByTagName("img");

    let index = 0; //当前图片索引
    let preIndex = index; //上一张图片的索引
    let opacityValue = 0; //当前图片的透明度
    let preOpacityValue = 1; //上一张图片的透明度

    setInterval(function () {
        //每次切换时，确定当前图片索引与上一张图片的索引
        preIndex = index;
        index++;
        //判断是否进行下一个轮播
        if (index >= imgArr.length) {
            index = 0;
        }
        hideImg(); //上一张图片隐藏
        showImg(); //下一张显示
    }, 3000);

    function hideImg() {
        preOpacityValue = 1;
        let timer1 = setInterval(function () {
            preOpacityValue -= 0.05;
            if (preOpacityValue <= 0) {
                preOpacityValue = 0;
                clearInterval(timer1);
            }
            imgArr[preIndex].style.opacity = preOpacityValue;
        }, 40);

    }

    function showImg() {
        opacityValue = 0;
        let timer2 = setInterval(function () {
            opacityValue += 0.05;
            if (opacityValue >= 1) {
                opacityValue = 1;
                clearInterval(timer2);
            }
            imgArr[index].style.opacity = opacityValue;
        }, 40);

    }


    //倒计时

    let hour = document.getElementById("hours");
    let minute = document.getElementById("minutes");
    let second = document.getElementById("seconds");

    function countTime() {
        //1.当前时间
        let date = new Date();
        let now = date.getTime();
        //2.截止时间 
        let str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " 24:00:00";
        let end = new Date(str).getTime();
        //3.时间差
        let leftTime = end - now;
        let h, m, s;
        if (leftTime > 0) {
            h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
            m = Math.floor(leftTime / 1000 / 60 % 60);
            s = Math.floor(leftTime / 1000 % 60);
        }
        //4.将倒计时赋值到相应的div中
        hour.innerHTML = h < 10 ? "0" + h : h;
        minute.innerHTML = m < 10 ? "0" + m : m;
        second.innerHTML = s < 10 ? "0" + s : s;

        setTimeout(countTime, 1000);
    }
    countTime();


    //跑马灯
    let scrollBox = document.getElementById("scrollBox");
    let btnBoxLeft = document.getElementById("btn-box-left");
    let btnBoxRight = document.getElementById("btn-box-right");
    let scrollIndex = 0;
    let left = 0;//滚动条位置

    btnBoxLeft.style.color = "#e0e0e0";//初始化左按钮无效

    btnBoxRight.onclick = function () {
        btnBoxLeft.style.color = "#000";
        scrollIndex++;
        if (scrollIndex > 1) {
            scrollIndex = 2;
            this.style.color = "#e0e0e0";
        }
        let timer = setInterval(function () {
            left -= 60;
            if (left <= scrollIndex * -978) {
                left = scrollIndex * -978;
                clearInterval(timer);
            }
            scrollBox.style.left = left + "px";
        }, 40)
    }

    btnBoxLeft.onclick = function () {
        btnBoxRight.style.color = "#000";
        scrollIndex--;
        if (scrollIndex < 1) {
            scrollIndex = 0;
            this.style.color = "#e0e0e0";
        }
        let timer = setInterval(function () {
            left += 60;
            if (left > scrollIndex * -978) {
                left = scrollIndex * -978;
                clearInterval(timer);
            }
            scrollBox.style.left = left + 'px';
        }, 40);

    }


}