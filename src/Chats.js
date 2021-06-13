import React from 'react'
import './Chats.css'
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Sarah"
                message="Hey!"
                timestamp="35 minutes ago"
                pfp="https://www.whitetailproperties.com/uploads/aftershow/Mallard.jpg"
            />
            <Chat 
                name="tucker"
                message="Im tired"
                timestamp="743 years ago"
                pfp="https://www.thespruce.com/thmb/jMtJRClFPZIZ5wwvRKj89lL2LBA=/1500x1000/filters:fill(auto,1)/duck-big-bill-59ef8e5068e1a2001072c89e.jpg"
            />
            <Chat 
                name="ducker"
                message="quack?"
                timestamp="5 years ago"
                pfp="http://3.bp.blogspot.com/-JM3ljZ4K9kA/UNVKPlmnXLI/AAAAAAAAAGw/Pi5yw6A3bT0/s1600/white-duck-water.jpg"
            />
            <Chat 
                name="duck"
                message="QUACK"
                timestamp="69 minutes ago"
                pfp="http://1.bp.blogspot.com/-4Xbt2hlZBG4/Tw_G1af7U5I/AAAAAAAAEgk/HViM-Fvalb8/s1600/Duck-06.jpg"
            />
        </div>
    )
}

export default Chats
