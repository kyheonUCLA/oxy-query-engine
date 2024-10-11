
from llama_index.core import VectorStoreIndex
from flask import request, current_app, jsonify, send_file, after_this_request, render_template
from app.api import api_bp as bp

from app.services.db import connect_to_db, create_local_db
from app.services.parse import parse_pdf_documents


@bp.route('/test1', methods=['POST'])
def home():
    req = request.get_json()
    documents = parse_pdf_documents('40 CFR Part 60 Subpart OOOOb.pdf')
    index = VectorStoreIndex.from_documents(documents)
    query_engine = index.as_query_engine()
    response = query_engine.query(req['q'])
    res = {
        'response': str(response.response),
        'source_nodes': [node.to_dict() for node in response.source_nodes]
        }
    return jsonify(res)



@bp.route('/test2')
def test():
    db = current_app.config.get('db')
    print(db)
    return "test2"

@bp.route('/test3', methods=['POST'])
def test3():
    req = request.get_json()
    print(req['q'])
    index = create_local_db("./storage")
    query_engine = index.as_query_engine()
    response = query_engine.query(req['q'])
    res = {
        'response': str(response.response),
        'source_nodes': [node.to_dict() for node in response.source_nodes]
        }
    
    return jsonify(res)
    