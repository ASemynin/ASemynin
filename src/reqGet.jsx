import axios from "axios"


async function ReqGet(setData) {

    await axios.get("http://uni-team-inc.online:9000/api/v1/messages?limit=10")
    .then(data => {
        data.data.sort((a, b) => a.created_at - b.created_at);
      setData(data.data)
    })
  
  
}

export default ReqGet;
