from flask import Flask, render_template, request, redirect, url_for
from forms import UserInfoForm

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a secure key

@app.route('/', methods=['GET', 'POST'])
def home():
    form = UserInfoForm()  # Create an instance of the form
    if form.validate_on_submit():  # Check if the form is submitted and valid
        # Retrieve user inputs
        name = form.name.data
        weight = form.weight.data
        height = form.height.data
        age = form.age.data
        gender = form.gender.data
        physical_activity = form.physical_activity.data

        # Example data for the result page
        breakfast = "Tofu(125g), Berries(80g)"
        lunch = "Yogurt(1 cup), Vegetables(80g), Leafy Greens"
        dinner = "Cooked Fish(100g), Whole Grain Bread(1 slice)"

        # Pass data to the result page
        return render_template(
            'result.html',
            name=name,
            breakfast=breakfast,
            lunch=lunch,
            dinner=dinner
        )

    return render_template('home.html', form=form)  # Render the form page

if __name__ == '__main__':
    app.run(debug=True)