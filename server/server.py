from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Mengizinkan semua domain untuk mengakses API

# Memuat model dari file
model_path = 'models/decision_tree_model.joblib'
dtr_model = joblib.load(model_path)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Mengambil data dari frontend (JSON)
        umur = data['umur']
        jenis_kelamin = data['jenis_kelamin']
        tinggi_badan = data['tinggi_badan']

        # Masukkan data ke dalam array untuk prediksi
        input_data = np.array([[umur, jenis_kelamin, tinggi_badan]])
        prediction = dtr_model.predict(input_data)[0]

        status_gizi_mapping = {0: 'Normal', 1: 'Severely Stunted', 2: 'Stunted', 3: 'Tinggi'}
        result = status_gizi_mapping[prediction]

        return jsonify({'prediction': result})  
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
