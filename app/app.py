from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/send', methods=['POST', 'GET'])
def compute():
    if request.method == 'POST':
        ;


if __name__ == "__main__":
    app.run(debug=True)
