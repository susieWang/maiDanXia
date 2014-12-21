$(document).ready(function() {

    var controller = new ScrollMagic;

    var subjectEntry = './images/scroll-magic/man-entry.png',
        subject0 = './images/scroll-magic/man-0.png',
        subject90 = './images/scroll-magic/man-90.png';

    var spiritClass = '.js-subject';
    var $spirit = $(spiritClass);

    var tempImg1 = new Image();
    tempImg1.src = subject0;
    var tempImg2 = new Image();
    tempImg2.src = subject90;

    var pinAnim = (new TimelineMax).add([TweenMax.to(spiritClass, 1, {
        left: '30px',
        top: '92px'
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '115px',
        top: '160px',
        onStart: function() {
            $spirit.attr('src', subject90);
            $('.part3-sub-header-step-1').animate({ opacity: 0 });
        },
        onReverseComplete: function() {
            $spirit.attr('src', subjectEntry);
            $('.part3-sub-header-step-1').animate({ opacity: 1 });
        }
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '215px',
        top: '105px',
        onStart: function() {
            $spirit.attr('src', subject0);
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject90)
        }
    })]).add([TweenMax.to(spiritClass, 1.5, {
        left: '390px',
        top: '185px',
        onStart: function() {
            $spirit.attr('src', subject90);
            $('.part3-sub-header-step-2').animate({ opacity: 0 });
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject0);
            $('.part3-sub-header-step-2').animate({ opacity: 1 });
        }
    })]).add([TweenMax.to(spiritClass, 1.5, {
        left: '520px',
        top: '125px',
        onStart: function() {
            $spirit.attr('src', subject0);
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject90);
        }
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '680px',
        top: '205px',
        onStart: function() {
            $spirit.attr('src', subject90);
            $('.part3-sub-header-step-3').animate({ opacity: 0 });
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject0);
            $('.part3-sub-header-step-3').animate({ opacity: 1 });
        }
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '720px',
        top: '230px',
        onStart: function() {
            $spirit.attr('src', subjectEntry);
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject90);
        }
    })]);

    if($('#part3').length) {
        new ScrollScene({
            triggerElement: '#part3',
            triggerHook: 'onLeave',
            duration: 1200,
            offset: 170
        }).setTween(pinAnim).setPin('#part3').addTo(controller);

        $('#part3').parent().css({ 'background-color' : $('#part3').css('background-color') });
    }


    var getPointOuterStyle = function(r) {
        return {
            height: r * 2 + 'px',
            left: -r + 'px',
            top: -r + 'px',
            width: r * 2 + 'px'
        };
    };

    var loadPointOuterAnimation = function(selector) {
        (new TimelineMax({ delay: 0.5 })).add([TweenMax.to(selector, 0.8, getPointOuterStyle(23))])
            .add([TweenMax.to(selector, 0.5, getPointOuterStyle(18))])
            .add([TweenMax.to(selector, 0.5, getPointOuterStyle(23))])
            .add([TweenMax.to(selector, 0.7, getPointOuterStyle(18))])
            .add([TweenMax.to(selector, 0.4, getPointOuterStyle(23))]);
    };


    if($('#part5').length) {
        var _top = $('#part5').offset().top;
        var _height = $('#part5').height();
        var _offset = 0;

        var $root = $(window);
        var isPlayed = false;

        $root.on('scroll', function() {
            var _offsetTop = $root.scrollTop();

            if(_offsetTop < _top - _offset) {
                if(isPlayed) {
                    isPlayed = false;
                    reset();
                }
            }
            else if(_offsetTop >= _top - _offset && _offsetTop <= _top + _height) {
                if(!isPlayed) {
                    isPlayed = true;
                    play();
                }
            }
            else if(_offsetTop > _top + _height) {
                if(isPlayed) {
                    isPlayed = false;
                    reset();
                }
            }

        });


        function reset() {
            $('.step').css({ width: '', opacity: '' });
            $('.point').css({ display: '' });
            $('.point-outer').css({ width: '', height: '', left: '', top: '' });
        }

        function play() {
            (new TimelineMax).add([TweenMax.to('.step-1', 0.3, {
                width: '200px',
                onStart: function() {
                    $('.step-1').css({ opacity: 1 });
                }
            })]).add([TweenMax.to('.step-2', 0.3, {
                width: '200px',
                onStart: function() {
                    $('.point-1').fadeIn(1000);
                    $('.step-2').css({ opacity: 1 });

                    loadPointOuterAnimation('.point-1 > .point-outer');
                }
            })]).add([TweenMax.to('.step-3', 0.3, {
                width: '300px',
                onStart: function() {
                    $('.point-2').fadeIn(1000);
                    $('.step-3').css({ opacity: 1 });

                    loadPointOuterAnimation('.point-2 > .point-outer');
                }
            })]).add([TweenMax.to('.step-4', 0.3, {
                width: '180px',
                onStart: function() {
                    $('.point-3').fadeIn(1000);
                    $('.step-4').css({ opacity: 1 });

                    loadPointOuterAnimation('.point-3 > .point-outer');
                }
            })]).add([TweenMax.to('.step-5', 0.3, {
                width: '250px',
                onStart: function() {
                    $('.point-4').fadeIn(1000);
                    $('.step-5').css({ opacity: 1 });

                    loadPointOuterAnimation('.point-4 > .point-outer');
                }
            })]);
        }
    }

    // if($('#part5').length) {
    //     new ScrollScene({
    //         triggerElement: '#part5',
    //         triggerHook: 'onLeave',
    //         duration: 1,
    //         offset: -300
    //     }).on('start', function() {
    //         $('.step').css({ width: '', opacity: '' });
    //         $('.point').css({ display: '' });
    //         $('.point-outer').css({ width: '', height: '', left: '', top: '' });

    //         (new TimelineMax).add([TweenMax.to('.step-1', 0.3, {
    //             width: '200px',
    //             onStart: function() {
    //                 $('.step-1').css({ opacity: 1 });
    //             }
    //         })]).add([TweenMax.to('.step-2', 0.3, {
    //             width: '200px',
    //             onStart: function() {
    //                 $('.point-1').fadeIn(1000);
    //                 $('.step-2').css({ opacity: 1 });

    //                 loadPointOuterAnimation('.point-1 > .point-outer');
    //             }
    //         })]).add([TweenMax.to('.step-3', 0.3, {
    //             width: '300px',
    //             onStart: function() {
    //                 $('.point-2').fadeIn(1000);
    //                 $('.step-3').css({ opacity: 1 });

    //                 loadPointOuterAnimation('.point-2 > .point-outer');
    //             }
    //         })]).add([TweenMax.to('.step-4', 0.3, {
    //             width: '180px',
    //             onStart: function() {
    //                 $('.point-3').fadeIn(1000);
    //                 $('.step-4').css({ opacity: 1 });

    //                 loadPointOuterAnimation('.point-3 > .point-outer');
    //             }
    //         })]).add([TweenMax.to('.step-5', 0.3, {
    //             width: '250px',
    //             onStart: function() {
    //                 $('.point-4').fadeIn(1000);
    //                 $('.step-5').css({ opacity: 1 });

    //                 loadPointOuterAnimation('.point-4 > .point-outer');
    //             }
    //         })]);
    //     }).on('leave', function() {
    //         // $('.step').css({ width: '', opacity: '' });
    //         // $('.point').css({ display: '' });
    //         // $('.point-outer').css({ width: '', height: '', left: '', top: '' });
    //     }).setPin('#part5').addTo(controller);

    //     $('#part5').parent().css({ 'background-color' : $('#part5').css('background-color') });
    // }
});
