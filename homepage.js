setTimeout(function() {
    $("#chtxt").on("keyup", function() {
        var srchTerm = $(this).val(),
            $rows = $("#chattish").children("li");
        if (srchTerm.length > 0) {
            $rows.stop().hide();
            $("#chattish").find("li:contains('" + srchTerm.toLowerCase() + "')").stop().show();
        } else {
            $rows.stop().show();
        }
    });

    $(".StsDrp_srh-frm-icn_cls, #StsDrp_srh-frm-icn_cls_mp").on("click", function() {
        $(".StsDrp2").removeClass('js-drp-open');
    })

    $("#mptxt").on("keyup", function() {
        var srchTerm = $(this).val(),
            $rows = $("#mpul").children("li");
        if (srchTerm.length > 0) {
            $rows.stop().hide();
            $("#mpul").find("li:contains('" + srchTerm.toLowerCase() + "')").stop().show();
        } else {
            $rows.stop().show();
        }
    });

    $(document).ready(function() {
        $('.jobsshow').hide();
        $("#sabhi").show();
        $('ul.TlTbs-ul li span').click(function() {
            var tab_id = $(this).attr('data-tab');
            $('ul.TlTbs-ul li span').removeClass('TlTbs-act');
            $('.jobsshow').hide();
            $("#" + tab_id).show();
            $(this).addClass('TlTbs-act');
        })
    });
    $(document).ready(function() {
        $('.Vd3_CrVD').hide();
        $(".Tgs_sm").show();
        
        if (multi_site_name == 'MP') {
          $("#mpcgVd").show();
          $("#mpcgVdtext").show();
        } else if (multi_site_name == 'RAJ') {
          $("#rajVd").show();
          $("#rajVdtext").show();
        }
        
        $('ul li.Vd4_TlTbs-li').click(function() {
          var tab_id = $(this).attr('data-tab');
          $('ul li.Vd4_TlTbs-li').removeClass('TlTbs-act');
          
          if (tab_id === "videosVd") {
            // If the 'videosVd' tab is clicked, hide the iframe and prevent sound
            var iframe = document.getElementById("dynamic-iframe");
            if (iframe) {
              iframe.src = ""; // Set the iframe source to an empty string to stop playback
            }
          } else {
            // For other tabs, show the corresponding iframe
            $('.Vd3_CrVD#mpcgVd').show();
            $('.Vd3_CrVD#videosVd').hide();
          }
      
          $("#" + tab_id).show();
          $(this).addClass('TlTbs-act');
          $(".Tgs_sm").hide();
          $(".Tgs_sm span").hide();
          $(".Tgs_sm").show();
          $("#" + tab_id + "text").show();
          
          if (tab_id === "videosVd") {
            $('.Vd3_CrVD#mpcgVd').hide();
            $(".Tgs_sm").hide();
          }
        });
      });
      

    
//--== New Videos Scrollbar ==--//
        var swiper = new Swiper(".vd1-wdg-swp", {
            slidesPerView: "4.5",
            freeMode: true,
            effect: "slide",
            spaceBetween: 0,
            direction: "verticle",
            allowTouchMove: true,
            mousewheelControl: true,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
                hide: false,
            },

            mousewheel: {
                eventsTarged: ".swiper-slide",
            },

            breakpoints: {
                0: {
                    direction: "horizontal",
                    slidesPerView: "1.1",
                },

                360: {
                    direction: "horizontal",
                    slidesPerView: "1.5",
                },

                500: {
                    direction: "horizontal",
                    slidesPerView: "1.5",
                },

                640: {
                    direction: "horizontal",
                    slidesPerView: "2.1",
                },
                992: {
                    direction: "vertical",
                    slidesPerView: "auto",

                },

            },
        });


        whatIsNext();
        setInterval(function () {
            whatIsNext();
        }, 60 * 1000);
        function whatIsNext() {
        $.ajax({ 
            url: "<?php echo ($this->channel == 'ndtvprofit') ? EDATA_HOST . '/cricket/ndtv/livetvComingUp-ndtvprofit.json' : EDATA_HOST . '/cricket/ndtv/livetvComingUp-ndtv24x7.json'; ?>", 
            cache: true, dataType: 'json', 
            beforeSend: function () {   }, 
            success: function (data) { 
            var nowplayingname = data['nowplaying']['name'];
            var comingupname = data['comingup']['name'];
                if((nowplayingname === null || nowplayingname === '' ) && (comingupname === null || comingupname === '' )) {
        var html = '';
        }else {
        var html = '<span itemprop="headline name">' +  data['nowplaying']['name'] +  '</span> </div> <div class="nvideo_cominguptxt"> Coming Up at <span>' + data['comingup']['time'] + ' - ' +  data['comingup']['name'] + '</span>';	
        //alert(html);
    }			
            
                 $('#nvideo_nowplay_wrap').empty();
                 $('#nvideo_nowplay_wrap').append(html);
                    
                    } 
            });
    }
},500)


