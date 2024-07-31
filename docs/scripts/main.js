// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
console.log('\'Allo \'Allo!');
console.log('Check my LINKEDIN 👩‍💻👨‍💻');
console.log('https://www.linkedin.com/in/balmacefa/');
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['English', 'Spanish', 'Italian'],
        datasets: [{
            label: '',
            data: [85, 100, 70],
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
},
{
    id: '#languages',
    speed: 1,
    from: 0,
    to: 120
},
{
    id: '#showcase-title',
    speed: 1,
    from: 0,
    to: 130
},
{
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
}, {
    id: '#Line-Highlight-Bookmark',
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


$(document).ready(function() {

    var projects = [
        {
            title: "SIAJ / Integral System of Access to Justice",
            iframe: '<iframe src="https://docs.google.com/document/d/e/2PACX-1vR_fd4pomFuwOny2oUqaW8_te72GdrLhP2anMAqUyo2HVq2lZq8H2UKijffe82ykSAhnfh_v1fWjD4E/pub?embedded=true"></iframe>'
        },
        {
            title: "IBM & Kyndryl / Multicloud Management Platform",
            iframe: '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRFJ2QrveGVeG2W5JGS5n3xIsT91x6UJ_0AjS4c82azygTMVc8BTcKvMt0XeVed62UexzltGfd86XRH/pub?embedded=true"></iframe>'
        },
        {
            title: "WhatsApp CRM",
            iframe: '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQHCM5KiEdNOsX1jcYLwiSGIbSjw0uTzYhGR3K1oOw7o15SwPSBZKn18vXP6TaRzP19BhFtIg33MTNi/pub?embedded=true"></iframe>'
        }
        // Agrega más proyectos según sea necesario
    ];

    projects.forEach(function(project, index) {
        $('#project-cards').append(
            `<div class="col">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <p class="card-text">${project.title}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary view-btn" data-id="${index}">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        );
    });

    $('.view-btn').click(function() {
        var index = $(this).data('id');
        var iframeContent = projects[index].iframe;

        $('#project_iframe_container').html(iframeContent).show();
    });
});