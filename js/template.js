      //header fixed
      if(scrollValue >= 200){
        $(".header").addClass("translate-top");
      }else{
        $(".header").removeClass("translate-top");
      }

      //header fixed
      if(scrollValue >= 250){
        $(".header").addClass("position-fixed");
        $(".dark-logo").addClass("d-block");
        $(".white-logo").addClass("d-none");
      }else{
        $(".header").removeClass("position-fixed");
        $(".dark-logo").removeClass("d-block");
        $(".white-logo").removeClass("d-none");
      }
