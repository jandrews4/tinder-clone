import React from 'react';
import './chatScreen.css';
import { useState } from 'react';
import { Avatar } from '@material-ui/core';

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'Sarah',
            image: 'https://www.bing.com/images/search?view=detailV2&ccid=RcZv2i0u&id=905883214E922BEFCA12666C178AA1C0ACBAE10A&thid=OIP.RcZv2i0ulCPC4mgWX0QJ2gHaLH&mediaurl=https%3a%2f%2fdomesticgothess.com%2fwp-content%2fuploads%2f2020%2f08%2fsandwich-bread.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR45c66fda2d2e9423c2e268165f4409da%3frik%3dCuG6rMChihdsZg%26pid%3dImgRaw&exph=1800&expw=1200&q=bread&simid=608010757538075394&ck=0B69599DA91CC4F497A6B33D8D5190C5&selectedIndex=7&FORM=IRPRST',
            message: 'whats up'
        },
        {
            name: 'tucker',
            image: 'https://www.bing.com/images/search?view=detailV2&ccid=hHx%2bNjDh&id=D808D19348FA2DB4527D28726144BDBAC3C54838&thid=OIP.hHx-NjDhWp1wBj6PNk_b8gHaHU&mediaurl=https%3a%2f%2fjoybileefarm.com%2fwp-content%2fuploads%2f2013%2f10%2fMulti-Grain-Artisan-Bread-in-5-Minutes-crop-feat-im.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR847c7e3630e15a9d70063e8f364fdbf2%3frik%3dOEjFw7q9RGFyKA%26pid%3dImgRaw&exph=3211&expw=3250&q=bread&simid=608023848594724129&ck=852732C9094A602865286BBA77F222A5&selectedIndex=8&FORM=IRPRST',
            message: 'whats it'
        },
        {
            name: 'ducker',
            image: 'https://www.bing.com/images/search?view=detailV2&ccid=h4rUGxF4&id=68AA04EDBDD30818DCBC81DEA1FCA7C781548DB4&thid=OIP.h4rUGxF4G8klbPqD363ZewHaLH&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR878ad41b11781bc9256cfa83dfadd97b%3frik%3dtI1Ugcen%252fKHegQ%26riu%3dhttp%253a%252f%252fsarahsvegankitchen.com%252fwp-content%252fuploads%252f2019%252f05%252fryebread-min.jpg%26ehk%3dCR%252bH0HEb%252fD6RRXNJGQ%252by2i%252bf%252bryzdAUo3Eq%252bWFcTtvM%253d%26risl%3d%26pid%3dImgRaw&exph=2250&expw=1500&q=bread&simid=608007227071689197&ck=AB35559239082511AAC7BF6B49194E4A&selectedIndex=0&FORM=IRPRST',
            message: 'how'
        },
        {
            message: 'quack'
        }

    ]);

    return (
        <div className="chatScreen">
            
            <p className="chatScreen_timestamp">You matched with Duck on 6/9/420</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                    className="chatScreen__image"
                    src={message.image}
                    alt={message.name}
    
                    />

                    <p className="chatScreen__text">{message.message}</p>
                </div>
            ) : (
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
            )))}
        
        </div>
                

    )
}

export default ChatScreen;
