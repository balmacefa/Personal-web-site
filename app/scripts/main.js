// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
console.log('\'Allo \'Allo!');
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['English', 'Spanish', 'Italian', 'Russian'],
        datasets: [{
            label: '',
            data: [85, 100, 70, 2],
            backgroundColor: '#938c84'
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    }
});


var list = [{
    id: '#about-me',
    speed: 1,
    from: 0,
    to: 120
}, {
    id: '#languages',
    speed: 1,
    from: 0,
    to: 120
}, {
    id: '#skills',
    speed: 1,
    from: 0,
    to: 82
}, {
    id: '#experience',
    speed: 1,
    from: 0,
    to: 105
}, {
    id: '#interest',
    speed: 1,
    from: 0,
    to: 88
}, {
    id: '#side-projects',
    speed: 1,
    from: 0,
    to: 55
}, {
    id: '#dddprojects',
    speed: 1,
    from: 0,
    to: 95
}, {
    id: '#education',
    speed: 1,
    from: 0,
    to: 56
}, {
    id: '#certifications',
    speed: 1,
    from: 0,
    to: 82
}, {
    id: '#contact',
    speed: 1,
    from: 0,
    to: 103
}, {
    id: '#awards',
    speed: 1,
    from: 0,
    to: 113
}]



// build scene
var controller = new ScrollMagic.Controller();

function newTween(el) {
    new ScrollMagic.Scene({
            triggerElement: el.id,
            duration: 200
        })
        // animate color and top border in relation to scroll position
        .setTween(new TimelineMax().add([
            TweenMax.fromTo(el.id, el.speed, {
                boxShadow: `inset ${el.from}px 0 0 0 #ffea00`
            }, {
                boxShadow: `inset ${el.to}px 0 0 0 #ffea00`,
                ease: Linear.easeNone
            })
        ])) // the tween durtion can be omitted and defaults to 1
        .addTo(controller);
}

list.forEach(el => {
    newTween(el);
});