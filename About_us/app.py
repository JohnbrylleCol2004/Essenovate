from flask import Flask, render_template_string

app = Flask(__name__)

HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Developer Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8e7c9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 600px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 2px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }
        .about, .details {
            width: 100%;
            text-align: left;
            margin-bottom: 10px;
        }
        .social-icons img {
            width: 30px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div class='container'>
        <div class='image'>Image of Developer</div>
        <div class='about'>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div class='details'>
            <h3>Details:</h3>
            <p><strong>Name:</strong> Developer Name</p>
            <p><strong>Age:</strong> 25</p>
            <p><strong>Email:</strong> developer@example.com</p>
            <div class='social-icons'>
                <img src='https://via.placeholder.com/30' alt='Facebook'>
                <img src='https://via.placeholder.com/30' alt='Instagram'>
                <img src='https://via.placeholder.com/30' alt='GitHub'>
                <img src='https://via.placeholder.com/30' alt='LinkedIn'>
            </div>
        </div>
    </div>
</body>
</html>
"""

@app.route('/')
def home():
    return render_template_string(HTML_TEMPLATE)

if __name__ == '__main__':
    app.run(debug=True)
