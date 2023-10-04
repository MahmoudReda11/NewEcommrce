var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable:true
    },
    autoplay:{
        delay:2500,
        disableOnInteraction: false,

    },
    loop:true,
  });

  var swiper = new Swiper(".deals", {
    slidesPerView: 2,
    spaceBetween: 30,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      breakpoints:{
        1200:{
          slidesPerView : 2,
        },
        990 : {
          slidesPerView : 1,
        },
        0 :{
          slidesPerView : 1,
        }
        
      }
  });



  var swiper = new Swiper(".sale-sec", {
    slidesPerView: 5,
    spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      breakpoints:{
        1400:{
          slidesPerView: 5,
        },
        1200:{
          slidesPerView : 4,
        },
        800:{
          slidesPerView : 3,
          spaceBetween: 30,
        },
        650 :{
          slidesPerView : 3,
          spaceBetween: 15,
        },
        0 :{
          slidesPerView : 2,
          spaceBetween: 10,
        }
        
      }
  });


  
  var swiper = new Swiper(".swip-with-img", {
    slidesPerView: 4,
    spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      breakpoints:{
        1400:{
          slidesPerView: 4,
        },
        1100:{
          slidesPerView : 3,
        },
        800:{
          slidesPerView : 2,
          spaceBetween: 30,
        },
        700 :{
          slidesPerView : 2,
          spaceBetween: 15,
        },
        0 :{
          slidesPerView : 2,
          spaceBetween: 10,
        }
        
      }
  });
  


  /* side bar in Resbonsive */

  let btnCloseSide = document.getElementById("btn-close");
  let sideBar = document.getElementById("side-bar");
  let btnOpenSide = document.getElementById("open-side");

  btnOpenSide.onclick = () => {
    sideBar.classList.add('active')
  }
  btnCloseSide.onclick = () => {
    sideBar.classList.remove('active')
  }









  let bigImage = document.getElementById('big-img')

        function myProduct(item){
            bigImage.src = item
        }


        // product page
        //buy fast order
        
        let btnbuyNowF = document.querySelector('.buyNow')
        let divcretAcBuyF = document.querySelector('.creatacountfast')


btnbuyNowF.onclick = ()=> {
  divcretAcBuyF.classList.toggle('active')
}