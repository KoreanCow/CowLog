import { useState, useEffect } from 'react';
import axios from 'axios';

function useDataFetching(url) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data);
        console.log(response);
        setTimeout(() => {
          setIsLoading(response.data.length === 0 ? false : true);
        }, 1500);
      } catch (error) {
        console.error('서버 연결을 실패했습니다. error data :', error);
        setTimeout(fetchPost, 2000);
      }
    };

    fetchPost();
  }, []);

  return { posts, isLoading, setIsLoading };
}

export default useDataFetching;
