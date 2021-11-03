import pieChart from "./pieChart.js";

let quartiles = {};
let type;

d3.csv('ForbesColleges2019.csv', d3.autoType).then(data=>{ 
        quartiles.first = data.filter(d=>d.Rank >= 1 && d.Rank <= 163);
        quartiles.second = data.filter(d=>d.Rank >= 164 && d.Rank <= 326);
        quartiles.third = data.filter(d=>d.Rank >= 327 && d.Rank <= 488);
        quartiles.fourth = data.filter(d=>d.Rank >= 489 && d.Rank <= 650);
    
        update(quartiles.first);

        let elem = document.querySelector('#group-by');
        console.log('elem is ', elem);
        elem.addEventListener('change', handler);
        console.log('complete');
    })

function update(data) {
    pieChart(data);
}

function handler(event) {
    console.log('handler');
        
    type = d3.select("#group-by").node().value;
    console.log('update - type is ', type);
    if (type == "q1")
        update(quartiles.first);
    else if (type == "q2") 
        update(quartiles.second);
    else if (type == "q3")
        update(quartiles.third);
    else 
        update(quartiles.fourth);
    
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
//loadAndParseData();


