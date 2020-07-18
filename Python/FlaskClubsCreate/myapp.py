from flask import Flask, flash, render_template, request, redirect

myapp = Flask(__name__)
myapp.secret_key = 'vinay'
#Route / endpoint

clubs = []


@myapp.route('/')
def dummy():
    return redirect('/createclub')


@myapp.route('/createclub', methods=['post', 'get'])
def homePage():
    message = ''
    if request.method == 'POST':
        name = request.form.get('clubname').strip()  # access the data inside
        desc = request.form.get('clubdesc').strip()
        category = request.form.get('clubcategory').strip()
        if request.form.get("visibility"):
            public = True
        else:
            public = False

        if name == '' or desc == '' or category == '--Select--':
            message = "All fields are mandatory"
        else:
            clubs.append({'name': name, 'desc': desc,
                          'category': category, 'isPublic': public})
            message = "Club created successfully with name {0},{1},{2},{3} !".format(
                name, desc, category, public)
    return render_template('clubscreate.html', message=message)


if __name__ == "__main__":
    myapp.run(debug=True)
