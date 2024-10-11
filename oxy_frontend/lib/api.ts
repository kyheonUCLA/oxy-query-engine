
const post = async <ResponseType, BodyType>( endpoint: string, body: BodyType): Promise<ResponseType> => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: ResponseType = await response.json()
      return data
    } catch (error) {
      console.error('Error during POST request:', error)
      throw error
    }
};

const get = async <ResponseType>( endpoint: string): Promise<ResponseType> => {
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: ResponseType = await response.json()
      return data
    } catch (error) {
      console.error('Error during POST request:', error)
      throw error
    }
}





export default { post: post, get: get }
