import {useEffect, useState} from "react"
import ReqGet from "./reqGet";
import ReqPost from "./reqPost";
import ConvertUnix from "./utils"

function App() {

  const [data, setData] = useState([])
  const [message, setMessage] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    reqGet()
  }, [count])
  
  let reqPost = async(e) => {
    e.preventDefault()
    await ReqPost(message)
    setCount(count + 1)
  }

  let reqGet = async() => {
    await ReqGet(setData)
  }



  return (
    <div className="App">
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={(e) => reqPost(e)}>Отправить</button>

        {data.map((item,idx) => {
          return(
            <div key={idx}>
              <p>{item.from} : {item.text} : {ConvertUnix(item.created_at)} </p>
            </div> 
          )
        })}
    </div>
  );
}

export default App;
