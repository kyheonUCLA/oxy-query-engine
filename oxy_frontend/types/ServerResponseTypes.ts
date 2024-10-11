import { NodeWithScore } from 'llamaindex'

export type RetrieverEngineResponse = {
    source_nodes: NodeWithScore[]
}

export type QueryEngineResponse = {
    text: string,
    source_nodes: NodeWithScore[]
}