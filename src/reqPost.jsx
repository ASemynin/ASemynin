import axios from "axios"

async function ReqPost(value) {

    await axios.post("http://uni-team-inc.online:9000/api/v1/send", 
    JSON.stringify({
      text:value
    })
  )
}

export default ReqPost;
