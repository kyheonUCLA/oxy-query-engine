"use client"
import React, { useState, createContext, useContext } from 'react'
import type { QueryEngineResponse, RetrieverEngineResponse } from '@/types/ServerResponseTypes'

type ResponseContextProviderProps = {
    children: React.ReactNode,
}
type ResponseContextType = {
    response: QueryEngineResponse | null
    setResponse: React.Dispatch<React.SetStateAction<QueryEngineResponse | null>>,   
}
const ResponseContext = createContext<ResponseContextType | null>(null)
const ResponseContextProvider: React.FC<ResponseContextProviderProps> = ({ children }) => {
    const [response, setResponse] = useState<QueryEngineResponse | null>(null)

    return (
        <ResponseContext.Provider value={ {response, setResponse} }>
          {children}
        </ResponseContext.Provider>
    )
}

const useResponseContext = () => {
    const context = useContext(ResponseContext);
  
    if (context === null) {
        throw new Error("useResponseContext must be consumed within an ResponseContextProvider block");
    }
    return context
}
  
export default ResponseContextProvider
export { useResponseContext }
