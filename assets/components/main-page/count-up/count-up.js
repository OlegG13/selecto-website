var count = (function () {

    var $counter = $('[data-count]');

    function init() {
        return $counter.each(function () {
            console.log($(this))
        })
    }

    return {
        init: init
    }

})();

var project = {
    useEasing : true,
    useGrouping : true,
    separator : ',',
    decimal : '.',
    count: 60,
    id: "projects"
};

var projectCount = new CountUp(project.id, 10, project.count, 0, 2.5, project);

var years = {
    useEasing : true,
    useGrouping : true,
    separator : ',',
    decimal : '.',
    count: 3,
    id: "years"
};

var yearsCount = new CountUp(years.id, 0, years.count, 0, 2.5, years);


var people = {
    useEasing : true,
    useGrouping : true,
    separator : ',',
    decimal : '.',
    count: 50,
    id: "people"
};

var peopleCount = new CountUp(people.id, 10, people.count, 0, 2.5, people);

var offices = {
    useEasing : true,
    useGrouping : true,
    separator : ',',
    decimal : '.',
    count: 2,
    id: "offices"
};

var officesCount = new CountUp(offices.id, 0, offices.count, 0, 2.5, offices);
