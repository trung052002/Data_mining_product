from flask import Flask, render_template
from model import prediction_and_reality
app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    model_prediction = prediction_and_reality()
    list_days = model_prediction[0]
    means_of_prediction_lr = model_prediction[1]
    means_of_prediction_dtr = model_prediction[2]
    means_of_reality = model_prediction[3]
    return render_template("index2.html", list_days=list_days,
                           means_of_prediction_lr=means_of_prediction_lr,
                           means_of_prediction_dtr = means_of_prediction_dtr,
                           means_of_reality=means_of_reality)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7700, debug=True)
