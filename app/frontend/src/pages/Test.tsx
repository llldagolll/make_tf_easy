import axios from 'axios'
import React, {useState, FC} from 'react'
  
export const ApiTest: FC = (props) => {
  const [posts, setPosts] = useState([])
  const handleSubmit = () => {
    axios
      .get('http://localhost:8000/api/test')
      .then(response => {
        setPosts(response.data);
        console.log(posts)
      })
      .catch(() => {
        console.log('通信に失敗しました．')
      });

  }
  return (
    <div>
      <p>Hello</p> 
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
  }
