
$(document).ready(function() {

    var controller = new ScrollMagic;

    var subjectEntry = './images/scroll-magic/man-entry.png',
        subject0 = './images/scroll-magic/man-0.png',
        subject90 = './images/scroll-magic/man-90.png';

    var spiritClass = '.js-subject';
    var $spirit = $(spiritClass);

    var pinAnim = (new TimelineMax).add([TweenMax.to(spiritClass, 1, {
        left: '30px',
        top: '92px'
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '115px',
        top: '160px',
        onStart: function() {
            $spirit.attr('src', subject90);
        },
        onReverseComplete: function() {
            $spirit.attr('src', subjectEntry);
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
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '295px',
        top: '149px',
        onStart: function() {
            $spirit.attr('src', subject90);
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject0);
        }
    })]).add([TweenMax.to(spiritClass, 1.5, {
        left: '295px',
        top: '149px',
        onStart: function() {
            $spirit.attr('src', subject0);
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject90);
        }
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '390px',
        top: '185px',
        onStart: function() {
            $spirit.attr('src', subject90);
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject0);
        }
    })]).add([TweenMax.to(spiritClass, 1, {
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
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject0);
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
        offset: 400
    }).setTween(pinAnim).setPin('#part3').addTo(controller);

    var stepAnimation = (new TimelineMax).add([TweenMax.to('.step-1', 1, {
        width: '200px',
        onStart: function() {
            $('.step-1').css({ opacity: 1 });
        },
        onReverseComplete: function() {
            $('.step-1').css({ opacity: 0 });
        }
    })]).add([TweenMax.to('.step-2', 1, {
        width: '200px',
        onStart: function() {
            $('.point-1').fadeIn(200);
            $('.step-2').css({ opacity: 1 });
        },
        onReverseComplete: function() {
            $('.point-1').fadeOut(200);
            $('.step-2').css({ opacity: 0 });
        }
    })]).add([TweenMax.to('.step-3', 1, {
        width: '300px',
        onStart: function() {
            $('.point-2').fadeIn(200);
            $('.step-3').css({ opacity: 1 });
        },
        onReverseComplete: function() {
            $('.point-2').fadeOut(200);
            $('.step-3').css({ opacity: 0 });
        }
    })]).add([TweenMax.to('.step-4', 1, {
        width: '180px',
        onStart: function() {
            $('.point-3').fadeIn(200);
            $('.step-4').css({ opacity: 1 });
        },
        onReverseComplete: function() {
            $('.point-3').fadeOut(200);
            $('.step-4').css({ opacity: 0 });
        }
    })]).add([TweenMax.to('.step-5', 1, {
        width: '250px',
        onStart: function() {
            $('.point-4').fadeIn(200);
            $('.step-5').css({ opacity: 1 });
        },
        onReverseComplete: function() {
            $('.point-4').fadeOut(200);
            $('.step-5').css({ opacity: 0 });
        }
    })]);

    $('#part5').length && new ScrollScene({
        triggerElement: '#part5',
        triggerHook: 'onLeave',
        duration: 600,
        offset: 0
    }).setTween(stepAnimation).setPin('#part5').addTo(controller);
});


function getWidth(radius) {
    return 200 / Math.cos(radius / 180 * Math.PI);
}

function getTop() {
    return 200 *(1 - Math.tan(radius / 180 * Math.PI));
}
