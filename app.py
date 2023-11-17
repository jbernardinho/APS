from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

Artigos = [
    {
            'id': '1',
            'titulo': 'A Seca na Amazônia: Uma Ameaça para Todo o Brasil?',
            'autor': 'Bruna Soldera'
    },
    {
            'id': '2',
            'titulo': 'Dessalinização da água do mar: afinal, esse projeto é viável?',
            'autor': 'Bruna Soldera'
    },
    {
            'id': '3',
            'titulo': 'GASES DE EFEITO ESTUFA E POLUIÇÃO DO AR: SEMELHANÇAS E DIFERENCIAIS', 
            'autor': 'Leandro Jose Barbosa Lima'
    },
    {
            'id': '4',
            'titulo': 'MEIO AMBIENTE, A URGÊNCIA DA PROTEÇÃO E DA SUSTENTABILIDADE', 
            'autor': 'Valéria Gonçalves Silva'
    },
    {
            'id': '5',
            'titulo': 'MEIO AMBIENTE:PRESERVAÇÃO E SUSTENTABILIDAD', 
            'autor': 'Américo Donizete Batista'
    },
    {
            'id': '6',
            'titulo': 'UMA ABORDAGEM AOS CRIMES AMBIENTAIS NA MINERAÇÃO: ANÁLISE DA LEI 9.605/98', 
            'autor': 'Antônio José Ribeiro Nunes'
    },
    {
            'id': '7',
            'titulo': 'MUDANÇAS CLIMÁTICAS E AGROECOLOGIA NO DESENVOLVIMENTO DO RIO GRANDE DO SUL-BRASIL', 
            'autor': 'Iran Carlos Lovis Trentin'
    },
    {
            'id': '8',
            'titulo': 'BIOMASSA PARA PRODUÇÃO DE ENERGIA SUSTENTÁVEL', 
            'autor': 'Marcelo Morello'
    },
    {
            'id': '9',
            'titulo': 'CRIMES CONTRA A FLORA NO RIO GRANDE DO SUL: PROPOSTA DE CHECKLIST PARA CONSTATAÇÃO', 
            'autor': 'Ana Paula Rozado Gomes'
    },
    {
            'id': '10',
            'titulo': 'DESENVOLVIMENTO RURAL SUSTENTÁVEL NA AGRICULTURA FAMILIAR ORGÂNICA: UM ESTUDO BIBLIOMÉTRICO', 
            'autor': 'Keitilanger Grisa Hahn' 
    },
    
]

@app.route('/Artigos',methods=['GET'])
def obter_Artigos():
    return jsonify(Artigos)

@app.route('/Artigos/<id>',methods=['GET'])
def obter_artigo_por_id(id):
    for Artigo in Artigos:
        if Artigo.get('id') == id or Artigo.get('autor') == id or Artigo.get('titulo') == id:
            return jsonify(Artigo)

@app.route('/Artigos/<id>',methods=['PUT'])    
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

@app.route('/Artigos/<id>', methods = ['DELETE'])
def excluir_artigos(id):
    for indice,artigo in enumerate(Artigos):
        if artigo.get('id') == id:
            del Artigos[indice]

    return jsonify(Artigos)


app.run(port=5000,host='0.0.0.0',debug=True)


