import Pusher from "pusher-js";
import { useState , useEffect} from "react";
import ChatInput from "./Input";
import Messages from "./Messages";
import Image from 'next/image';
import Jitsi from "react-jitsi";

const ChatScreen = ({ channelName, userName , color}) => {
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState();
  const [typingText, setTypingText] = useState('');
  const [totalUsers, setTotalUsers] = useState(0);
  const [loadJitsi, setLoadJitsi] = useState(false);
  const clearInterval = 900;
  var clearTimer;

  const requestNotificationPermission = async () => {
    if (Notification.permission !== "denied" || Notification.permission !== "granted") {
      await Notification.requestPermission();
    }
  };
  const showNotification = (title, body) => {
    if(document.visibilityState === "visible"){
      return;
    }
    if (Notification.permission !== "granted") {
      return;
    }
    let notification = new Notification(title, {
      body,
      icon: '/just-chatting/icon.png',
    });
    notification.onclick = () => {
      window.focus();
      notification.close();
    }
  }
  const addMessage = (message) => {
    setChats([...chats, {
      type: "message",
      data : message
    }]);
    
    
  };
  const addImage = (image) => {
    setChats([...chats, {
      type: "image",
      data : image
    }]);
  };
  useEffect(() => {
    const pusher = new Pusher('406974db40ff8341c47c', {
      cluster: 'ap2',
      authEndpoint : "/just-chatting/api/auth",
      auth: {
        params: {
          username : userName,
          color
        }
      }
    });
    requestNotificationPermission();
    const channel = pusher.subscribe("presence-" + channelName);

    channel.bind("pusher:subscription_succeeded",(members) => {
      setTotalUsers(members.count);
    });
    channel.bind("pusher:member_added",(member) => {
      setMsg({
        type : "update",
        data :{
          message : `${member.info.name} has joined the channel :)`,
          color : member.info.color
        }}); 
      setTotalUsers(channel.members.count);
    });
    channel.bind("pusher:member_removed",(member) => {

      setMsg({
        type : "update",
        data :{
          message : `${member.info.name} has left the channel :(`,
          color : member.info.color
        }}); 
      setTotalUsers(channel.members.count);
    });
    channel.bind("message", (data) => {
      
      if(data.username === userName) {

          const index = chats.findIndex(chat => chat.data.time === data.time);

          if(index !== -1) {
          setChats([...chats.slice(0, index), {
            type: "message",
            data : {...data , ack : true}
          }, ...chats.slice(index + 1)]);
        }
      }
      else{
        showNotification(data.username , data.message);
      setMsg({
        type : "message",
        data
      });
    }
    });
    channel.bind("image" , (data) =>  {
      if(data.username === userName) {
      const index = chats.findIndex(chat => chat.data.time === data.time);

      if(index !== -1) {
      setChats([...chats.slice(0, index), {
        type: "image",
        data : {...data , ack : true}
      }, ...chats.slice(index + 1)]);
    }
  }
  else{
    showNotification(data.username , data.message);
  setMsg({
    type : "image",
    data
  });
}
});
    channel.bind("typing", ({username}) => {
      if(username !== userName){
      setTypingText(`${username} is typing...`);
      clearTimeout(clearTimer);
      clearTimer = setTimeout(() => {
        setTypingText('');
      }, clearInterval);
      }
    });

    return () => {
      pusher.unsubscribe("presence-" + channelName);
    };
  }, []);

  useEffect(() => {
    if (msg) setChats([...chats, msg]);
  }, [msg]);

  return (
    <div>
      <div>
        <h4 style={
          {
            color: color,
            marginBottom: "0px"
          }
        }>
         { (userName == "prerna" || userName == "Prerna") ? "Hello cutiepie! " : "Hello " + userName + "! "}
        <Image src = {'/just-chatting/chatting.gif'} alt = 'emote' width={100} height={100}/>
        </h4>
        <div style={{
          paddingTop: "0px",
        }}>
          There are {totalUsers} users in channel <i>{channelName}</i> !
        </div>
        <button style={{marginTop : "10px"}} onClick={()=>setLoadJitsi(!loadJitsi)}>Toggle Jitsi</button>
        {loadJitsi && <Jitsi containerStyle={{width : '700px' , height : '250px' , position : "fixed" , top : "0px" , right : "0px"}} config={{prejoinPageEnabled : false  , startAudioMuted : 0 , startVideoMuted : 0 , startWithAudioMuted : true , startWithVideoMuted : true}} roomName={"just_chatting_jitsi_meeting_presence-" + channelName} displayName={userName}/>}
        <Messages chats={chats} username={userName} myColor = {color} />
        <div>
          {typingText && <div>{typingText}</div>}
        </div>
        <div>
        <ChatInput channel={channelName} username={userName} color = {color} addMessage = {addMessage} addImage = {addImage}/>
        </div>
        
      </div>
    </div>
  );
};

export default ChatScreen;