if (document.getElementById("projects") !== null) {
    var project = {
        useEasing : true,
        useGrouping : true,
        separator : ',',
        decimal : '.',
        count: 60,
        id: "projects"
    };
    var projectCount = new CountUp(project.id, 0, project.count, 0, 2.5, project);
}
if (document.getElementById("years") !== null) {
    var years = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 3,
        id: "years"
    };
    var yearsCount = new CountUp(years.id, 0, years.count, 0, 2.5, years);
}
if (document.getElementById("people") !== null) {
    var people = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 50,
        id: "people"
    };
    var peopleCount = new CountUp(people.id, 0, people.count, 0, 2.5, people);
}
if (document.getElementById("offices") !== null) {
    var offices = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 2,
        id: "offices"
    };
    var officesCount = new CountUp(offices.id, 0, offices.count, 0, 2.5, offices);
}
