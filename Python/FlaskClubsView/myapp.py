from flask import Flask, flash, render_template, request, redirect

myapp = Flask(__name__)
myapp.secret_key = 'vinay'
#Route / endpoint


@myapp.route('/')
def dummy():
    return redirect('/view')


@myapp.route('/view')
def getClubs():
    clubs = []
    for i in range(1, 11):
        clubs.append(
            {
                'name': 'club' + str(i),
                'desc': "desc" + str(i),
                'category': "category" + str((i % 4)+1),
                'isPublic': True if i % 3 != 0 else False
            }
        )
    return render_template('clubsview.html', clubs=clubs)


if __name__ == "__main__":
    myapp.run(debug=True)
