from flask import render_template
from website import app
from website.models.club import Club


@app.route('/club/list')
def club_list():
    clubs = Club.query.all()
    return render_template('clubs/list.html', clubs=clubs)


@app.route('/club/view/<int:club_id>')
def club_view(club_id):
    club = Club.query.filter_by(id=club_id).first_or_404()
    return render_template('clubs/view.html', club=club)
