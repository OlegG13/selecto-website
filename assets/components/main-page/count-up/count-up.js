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

if (document.getElementById("country") !== null) {
    var country = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 15,
        id: "country"
    };
    var countryCount = new CountUp(country.id, 0, country.count, 0, 2.5, country);
}
/* Cases */

/* Cases Life*/
if (document.getElementById("joined-life") !== null) {
    var joinedLife = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 14,
        id: "joined-life"
    };
    var joinedLifeCount = new CountUp(joinedLife.id, 0, joinedLife.count, 0, 2.5, joinedLife);
}

if (document.getElementById("platforms-life") !== null) {
    var platformsLife = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 58,
        id: "platforms-life"
    };
    var platformsLifeCount = new CountUp(platformsLife.id, 0, platformsLife.count, 0, 2.5, platformsLife);
}

if (document.getElementById("people-life") !== null) {
    var peopleLife = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 3,
        id: "people-life"
    };
    var peopleLifeCount = new CountUp(peopleLife.id, 0, peopleLife.count, 0, 2.5, peopleLife);
}

if (document.getElementById("publications-life") !== null) {
    var publicationsLife = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 156,
        id: "publications-life"
    };
    var publicationsLifeCount = new CountUp(publicationsLife.id, 0, publicationsLife.count, 0, 2.5, publicationsLife);
}

/* Cases Msfit*/
if (document.getElementById("joined-msfit") !== null) {
    var joinedMsfit = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 200,
        id: "joined-msfit"
    };
    var joinedMsfitCount = new CountUp(joinedMsfit.id, 0, joinedMsfit.count, 0, 2.5, joinedMsfit);
}

if (document.getElementById("platforms-msfit") !== null) {
    var platformsMsfit = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 3,
        id: "platforms-msfit"
    };
    var platformsMsfitCount = new CountUp(platformsMsfit.id, 0, platformsMsfit.count, 0, 2.5, platformsMsfit);
}

if (document.getElementById("people-msfit") !== null) {
    var peopleMsfit = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 4,
        id: "people-msfit"
    };
    var peopleMsfitCount = new CountUp(peopleMsfit.id, 0, peopleMsfit.count, 0, 2.5, peopleMsfit);
}

// if (document.getElementById("publications-msfit") !== null) {
//     var publicationsMsfit = {
//         useEasing: true,
//         useGrouping: true,
//         separator: ',',
//         decimal: '.',
//         count: 4,
//         id: "publications-life"
//     };
//     var publicationsMsfitCount = new CountUp(publicationsMsfit.id, 0, publicationsMsfit.count, 0, 2.5, publicationsMsfit);
// }

/* Cases  Sprout */

if (document.getElementById("joined-sprout") !== null) {
    var joinedSprout = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 150,
        id: "joined-sprout"
    };
    var joinedSproutCount = new CountUp(joinedSprout.id, 0, joinedSprout.count, 0, 2.5, joinedSprout);
}

if (document.getElementById("platforms-sprout") !== null) {
    var platformsSprout = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 3,
        id: "platforms-sprout"
    };
    var platformsSproutCount = new CountUp(platformsSprout.id, 0, platformsSprout.count, 0, 2.5, platformsSprout);
}

if (document.getElementById("people-sprout") !== null) {
    var peopleSprout = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 2.5,
        id: "people-sprout"
    };
    var peopleSproutCount = new CountUp(peopleSprout.id, 0, peopleSprout.count, 0, 2.5, peopleSprout);
}

if (document.getElementById("publications-sprout") !== null) {
    var publicationsSprout = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        count: 5,
        id: "publications-sprout"
    };
    var publicationsSproutCount = new CountUp(publicationsSprout.id, 0, publicationsSprout.count, 0, 2.5, publicationsSprout);
}