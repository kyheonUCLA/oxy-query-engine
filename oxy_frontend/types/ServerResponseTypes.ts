
type Metadata = {
    creation_date: string;
    file_name: string;
    file_path: string;
    file_size: number;
    file_type: string;
    last_modified_date: string;
    page_label?: string;
}

type RelatedNodeInfo = {
class_name: string;
hash: string;
metadata: Partial<Metadata>;
node_id: string;
node_type: string;
}
  
type Relationships = {
[key: string]: RelatedNodeInfo;
}
  
type Node = {
class_name: string;
embedding: null | any;
end_char_idx: number;
excluded_embed_metadata_keys: string[];
excluded_llm_metadata_keys: string[];
id_: string;
metadata: Metadata;
metadata_seperator: string;
metadata_template: string;
mimetype: string;
relationships: Relationships;
start_char_idx: number;
text: string;
text_template: string;
}

type NodeWithScore = {
class_name: string;
node: Node;
score: number;
}
  
  
  

export type RetrieverEngineResponse = {
    source_nodes: NodeWithScore[]
}

export type QueryEngineResponse = {
    text: string,
    source_nodes: NodeWithScore[]
}