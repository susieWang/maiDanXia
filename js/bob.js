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

    $('#part3').length && new ScrollScene({
        triggerElement: '#part3',
        triggerHook: 'onLeave',
        duration: 1200,
        offset: 170
    }).setTween(pinAnim).setPin('#part3').addTo(controller);


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

    var getStepStartFunc = function(index) {
        return function() {
            $('.step-' + index).css({ opacity: 1 });

            if(index > 1) {
                $('.point-' + (index - 1)).fadeIn(1000);
                loadPointOuterAnimation('.point-' + (index - 1) + ' > .point-outer');
            }
        }
    };


    var stepAnimation;

    if($('#part5').length) {
        new ScrollScene({
            triggerElement: '#part5',
            triggerHook: 0,
            duration: 800,
            offset: 0
        }).on('enter', function() {
            if(!stepAnimation) {
                stepAnimation = new TimelineMax();

                $.each([200, 200, 300, 180, 250], function(index, width) {
                    stepAnimation.add([
                        TweenMax.to('.step-' + (index + 1), 0.3, {
                            width: width + 'px',
                            delay: index ? 0 : 0.5,
                            onStart: getStepStartFunc(index + 1)
                        })
                    ]);
                });
            }
        }).setPin('#part5').addTo(controller);

        $('#part5').parent().css({ 'background-color': $('#part5').css('background-color') });
    }
});
