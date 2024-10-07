import React, { useState } from 'react';
import animated from "../assests/Asset 2.svg"

export const Chatbot = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="chatbuttonblock" >
                <button className="chatbutton" onClick={() => setShow(!show)}>
                    <img src={animated} alt="icons" />
                </button>
                <div className="circles">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </div>
            </div>
            {show && <div className="chatbotBlock">
                <div className="chatbotHeader">
                    Please let me know your question
                </div>
                <div className="chatbotBody">
                    <div className="botchat">
                        How May I Help you ?
                    </div>

                </div>
                <div className="chatbotfooter">
                    <input type="text" placeholder="Your question" />
                    <button className='submitbuttons'><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.2197 2.30688L11.2197 13.3069" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.2197 2.30688L15.2197 22.3069L11.2197 13.3069L2.21973 9.30688L22.2197 2.30688Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>

                </div>
            </div>}








        </div>
    )
}
