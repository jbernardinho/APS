from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

Artigos = [
    {
            'id': '1',
            'título': 'A Seca na Amazônia: Uma Ameaça para Todo o Brasil?',
            'autor': 'Bruna Soldera'
    },
    {
            'id': '2',
            'título': 'Dessalinização da água do mar: afinal, esse projeto é viável?',
            'autor': 'Bruna Soldera'
    },
    {
            'id': '3',
            'título': 'GASES DE EFEITO ESTUFA E POLUIÇÃO DO AR: SEMELHANÇAS E DIFERENCIAIS', 
            'autor': 'Leandro Jose Barbosa Lima'
    },
]

@app.route('/Artigos',methods=['GET'])
def obter_Artigos():
    return jsonify(Artigos)

@app.route('/Artigos/<int:id>',methods=['GET'])
def obter_artigo_por_id(id):
    for Artigo in Artigos:
        if Artigo.get('id') == id or Artigo.get('autor') == id or Artigo.get('título') == id:
            return jsonify(Artigo)

@app.route('/Artigos/<int:id>',methods=['PUT'])    
def editar_artigo_por_id(id):
    Artigo_alterado = request.get_json()
    for indice,Artigo in enumerate(Artigos):
        if Artigo.get('id') == id:
            Artigos[indice].update(Artigo_alterado)
            return jsonify(Artigos[indice])

@app.route('/Artigos',methods=['POST'])
def incluir_novo_Artigo():
    novo_artigo = request.get_json()
    Artigos.append(novo_artigo)

    return jsonify(Artigos)

@app.route('/Artigos/<int:id>', methods = ['DELETE'])
def excluir_artigos(id):
    for indice,artigo in enumerate(Artigos):
        if artigo.get('id') == id:
            del Artigos[indice]

    return jsonify(Artigos)


app.run(port=5000,host='0.0.0.0',debug=True)