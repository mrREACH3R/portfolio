from flask import Flask,render_template,request
#import pickle


import pandas
import numpy as np

popular_df = pandas.read_pickle('popular.pkl')

pt = pandas.read_pickle('pt.pkl')
print(pt)
books = pandas.read_pickle('books.pkl')
similarity_scores = pandas.read_pickle('similarity_scores.pkl')
#pt = pickle.load(open('pt.pkl','rb'))
#books = pickle.load(open('books.pkl','rb'))
#similarity_scores = pickle.load(open('similarity_scores.pkl','rb'))
app = Flask(__name__)

@app.route('/')
def index():

    return render_template('index.html',
                           book_name = list(popular_df['Book-Title'].values),
                           author=list(popular_df['Book-Author'].values),
                           image=list(popular_df['Image-URL-M'].values),
                           votes=list(popular_df['num_ratings'].values),
                           rating=list(popular_df['avg_rating'].values)
                           )
@app.route('/recommend')
def recommend_ui():
    return render_template('recommend.html')

@app.route('/recommend_books',methods=['post'])
def recommend():
    # index fetch
    # book_name = input()

    book_name = request.form.get('user_input')

    if book_name not in pt.index:
       # return "Book not found in the index. Please enter a valid book name."
        return render_template('Error.html')

    index = np.where(pt.index == book_name)[0][0]

    similar_items = sorted(list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True)[1:5]

    data = []
    for i in similar_items:
        item = []
        temp_df = books[books['Book-Title'] == pt.index[i[0]]]
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Title'].values))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Author'].values))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Image-URL-M'].values))

        data.append(item)

    # return data
    return render_template('recommend.html', data=data)


@app.route('/aboutus')
def aboutus_ui():
    return render_template('aboutus.html')

@app.route('/contactus')
def contactus_ui():
    return render_template('contactus.html')

@app.route('/login')
def login_ui():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)