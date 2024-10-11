from llama_index.vector_stores.astra_db import AstraDBVectorStore
from llama_index.core import (
    VectorStoreIndex,
    SimpleDirectoryReader,
    StorageContext,
    load_index_from_storage,
)

import os
from config import Config

def connect_to_db(collection_name: str, embedding_dimension: int=1536) -> AstraDBVectorStore:
    db = AstraDBVectorStore(
    token=Config.ASTRADB_TOKEN, 
    api_endpoint=Config.ASTRADB_URI,
    collection_name=collection_name,  
    embedding_dimension=embedding_dimension,  
    )
    return db

def create_local_db(persist_dir: str='./storage') -> VectorStoreIndex:
    if not os.path.exists(persist_dir):
        documents = SimpleDirectoryReader("data").load_data()
        index = VectorStoreIndex.from_documents(documents)
        index.storage_context.persist(persist_dir=persist_dir)
    else:
        storage_context = StorageContext.from_defaults(persist_dir=persist_dir)
        index = load_index_from_storage(storage_context)
    return index
