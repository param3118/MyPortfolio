# Sentiment Analysis Based on Text Analysis

**Description:** Developed a sentiment analysis model with the Naive Bayes algorithm, achieving 82% accuracy in classifying text into positive, negative, and neutral sentiments. Applied the model to analyze sentiment in product reviews and social media comments.

## Explanation
This project uses the Naive Bayes algorithm to perform sentiment analysis on text data. The model was trained using a dataset of labeled reviews and social media comments. After preprocessing and feature extraction, the model was able to classify sentiment with 82% accuracy.

### Key Steps:
1. Data Preprocessing: Cleaned the text data by removing stop words, special characters, and applying tokenization.
2. Feature Extraction: Used TF-IDF to transform text into numerical features.
3. Model Training: Used Naive Bayes for classification.
4. Sentiment Analysis: Applied the trained model to classify new text data into three categories: positive, negative, and neutral.

## Code Example

```python
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd

# Load dataset
data = pd.read_csv('text_data.csv')

# Preprocess data
vectorizer = TfidfVectorizer(stop_words='english')
X = vectorizer.fit_transform(data['text'])
y = data['sentiment']

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train Naive Bayes model
model = MultinomialNB()
model.fit(X_train, y_train)

# Evaluate model
accuracy = model.score(X_test, y_test)
print(f'Accuracy: {accuracy * 100}%')
