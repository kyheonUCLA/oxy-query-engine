"use client"

import React, {useState} from 'react'
import api from '@/lib/api'
import { useResponseContext } from '@/contexts/ResponseContextProvider'
import type { QueryEngineResponse } from '@/types/ServerResponseTypes'
import type { QueryEngineRequest } from '@/types/ServerRequestTypes'



const Search = () => {

  const [query, setQuery] = useState<string>("")
  const {response, setResponse} = useResponseContext()

  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value)
    console.log(query)
  }

  const onButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const response = await api.post<QueryEngineResponse, QueryEngineRequest>('http://127.0.0.1:5000/api/test3', {
        query: query,
      })
      setResponse(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form>
      <div className="w-96 h-52 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 w-full h-2/3  py-2 bg-white rounded-t-lg dark:bg-gray-800 focus:ring-red-500">
          <textarea onChange={onTextAreaChange} className="h-full w-full p-2 text-sm text-gray-900 bg-white border-1 dark:bg-gray-500 focus:ring-red-500
          dark:text-white dark:placeholder-gray-400 rounded-xl" placeholder="Search the document..." required >
          </textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button onClick={onButtonClick} className="inline-flex b-0  items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg 
          focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Search
          </button>
        </div>
      </div>  
      </form>
    </>
    )
}

export default Search