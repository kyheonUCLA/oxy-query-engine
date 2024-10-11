from llama_parse import LlamaParse
from llama_index.core import Document

from typing import List
from config import Config
import os

def parse_pdf_documents(filename) -> List[Document]:
    data_dir = os.path.join(os.getcwd(), 'data')
    filepath = os.path.join(data_dir, '40 CFR Part 60 Subpart OOOOb.pdf')
    parser = LlamaParse(
        api_key=Config.LLAMA_CLOUD_API_KEY,
        result_type="markdown", 
        num_workers=4,
        verbose=True,
        language="en",
    )
    documents = parser.load_data(filepath)
    return documents

