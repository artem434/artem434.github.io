  /*slider*/
        $('.fade').slick({
          dots: false,
          infinite: true,
          speed: 500,
          arrows:true,
          autoplay:true,
          autoplaySpeed:4000,
          fade: true,
          prevArrow: '<img src="img/Слой17.png" alt="" class="fode__prevArrow" />',
            nextArrow: '<img src="img/Слой8.png" alt="" class="fode__nextArrow" />',
          cssEase: 'linear'
        });

      /*feedback*/
        $(".modal").each( function(){
          $(this).wrap('<div class="overlay"></div>')
        });

        $(".open-modal").on('click', function(e){
          e.preventDefault();
          e.stopImmediatePropagation;
          
          var $this = $(this),
              modal = $($this).data("modal");
          
          $(modal).parents(".overlay").addClass("open");
          setTimeout( function(){
            $(modal).addClass("open");
          }, 350);
          
          $(document).on('click', function(e){
            var target = $(e.target);
            
            if ($(target).hasClass("overlay")){
              $(target).find(".modal").each( function(){
                $(this).removeClass("open");
              });
              setTimeout( function(){
                $(target).removeClass("open");
              }, 350);
            }
          });
        });

        $(".close-modal").on('click', function(e){
          e.preventDefault();
          e.stopImmediatePropagation;
          
          var $this = $(this),
              modal = $($this).data("modal");
          
          $(modal).removeClass("open");
          setTimeout( function(){ 
            $(modal).parents(".overlay").removeClass("open");
          }, 350);
        });



