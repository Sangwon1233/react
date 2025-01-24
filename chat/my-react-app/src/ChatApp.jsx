import React, {useEffect , useState } from "react";
import { getWebSocket } from './websocker';

const[sender, setSender] = useState();
const [messages,setMessages] = useState([]);
const [input,setInput] = useState("");
const ws = new WebSocket("ws://localhost:8080/chat")

useEffect(() => {
  const ws = getWebSocket()
  ws.onmessage = e =>{

    const messages = JSON.parse(e.data);
    console.log(message);
    setMessages(prev => [...prev,message])
  }
  return ()=>ws.close()
},[]);
const sendMessage =()=>{
  const ws = getWebSocket();
  if(ws.readyState === WebSocket.OPEN && input.trim()){
    const message = {sender,cotent : input,timestamp:new Date().getTime()};
    console.log(Message);
    ws.send(JSON.stringify(message))
    setInput("");
  }
}

const handleSender = e =>{
  setSender(e.target.value);
}

return(
  <div>
    <h3>Chat App</h3>
    <div style={{height:300,overflowX:"scroll",border:"1px solid black"}}>
      {messages.map((msg,index) => <div key={index}><strong>{msg.sender}</strong> : {msg.content}</div>)}
    </div>
    <input type="text" value={sender} onChange={handleSender}/>
    <input type="text" value={input} onChange={e=> setInput(e.target.value)} onKeyDown={e=> e.key === "Enter" && sendMessage()}/>
    <button onClick={sendMessage}>send</button>
  </div>
);