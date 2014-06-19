var today = "http://worldcup.sfg.io/matches/today?by_date=ASC";
var tomorrow = "http://worldcup.sfg.io/matches/tomorrow?by_date=ASC";
var now = "http://worldcup.sfg.io/matches/current?by_date=ASC";

// auto-refresh page each 5 seconds.
// because live scores.

setTimeout(function() {
    window.location.reload(1);
}, 10000);

$.getJSON(today, function(data) {

    $.each(data, function(index) {
        $(".matches_today")
            .append("<ul>")
            .append("<li>")
            .append("Teams: " + data[index].home_team.country + " vs " + data[index].away_team.country)
            .append("<br />Location: " + data[index].location)
            .append("<br />Time: " + new Date(data[index].datetime));
        if (data[index].status === "completed") {
            $(".matches_today")
                .append("<br />Winner: " + data[index].winner)
                .append("<br />Score: " + data[index].home_team.country + " " + data[index].home_team.goals + " - " + data[index].away_team.goals + " " + data[index].away_team.country)
                .append("</li>")
                .append("</ul");
        } else {
            $(".matches_today")
                .append("</li>")
                .append("</ul");
        }
    });
});

$.getJSON(tomorrow, function(data) {
    $.each(data, function(index) {
        $(".matches_tomorrow")
            .append("<ul>")
            .append("<li>")
            .append("Teams: " + data[index].home_team.country + " vs " + data[index].away_team.country)
            .append("<br />Location: " + data[index].location)
            .append("<br />Time: " + new Date(data[index].datetime))
            .append("</li>")
            .append("</ul");
    });
});

$.getJSON(now, function(data) {
    if (data.length > 0) {
        $.each(data, function(index) {
            $(".matches_now")
                .append("<ul>")
                .append("<li>")
                .append("Teams: " + data[index].home_team.country + " vs " + data[index].away_team.country)
                .append("<br />Score: " + data[index].home_team.goals + " - " + data[index].away_team.goals)
                .append("<br />Location: " + data[index].location)
                .append("<br />Status: " + data[index].status);
            if (data[index].status === "completed") {
                $(".matches_now")
                    .append("<br />Winner: " + data[index].winner)
                    .append("</li>")
                    .append("</ul");
            } else {
                $(".matches_now")
                    .append("</li>")
                    .append("</ul");
            }
        });
    } else {
        $(".matches_now").append("There aren't any games right now. Check back later.");
    }
});