import React, { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import { onSnapshot } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

const Chat = () => {
    const [chat,setChat] = useState();
    const [open, setOpen] = useState(false);
    const [text,setText] = useState("")
    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);
    console.log(chat)
    const handleEmoji = e =>{
        setText((prev)=> prev + e.emoji)
        setOpen(false)
    };

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="User Avatar" />
                    <div className="texts">
                        <span>CapyBara</span>
                        <p>ok i pull up</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="Phone Icon" />
                    <img src="./video.png" alt="Video Icon" />
                    <img src="./info.png" alt="Info Icon" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>manishantene manchodra bandoda</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>manishantene manchodra bandoda</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>manishantene manchodra bandoda</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://www.pbs.org/wnet/nature/files/2023/07/pexels-pixabay-160583-scaled-e1689259491194.jpg" alt="" />
                        <p>manishantene manchodra bandoda</p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div ref={endRef}></div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="Image Icon" />
                    <img src="./camera.png" alt="Camera Icon" />
                    <img src="./mic.png" alt="Microphone Icon" />
                </div>
                <input type='text' placeholder='Type a message....' value={text} onChange={(e)=>setText(e.target.value)} />
                <div className="emoji"> 
                    <img 
                        src="./emoji.png" 
                        onClick={() => setOpen(prev => !prev)} 
                        alt="Emoji Icon" 
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}></EmojiPicker>
                    </div>
                </div>
                <button className='send-Button'>Send</button>
            </div>
        </div>
    );
}

export default Chat;
