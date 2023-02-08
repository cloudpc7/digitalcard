import React from 'react'

export default function Hero() {
    return (
        <nav>
            <h3>Paul Cloud</h3>
            <h4>Frontend Developer</h4>
            <small><a href="clouddesignskills.com" target="_blank">CloudDesign</a></small>
            <div className="buttons">
                <a><button className="btn email"><img src="/Mail.png" className="mail"/>Email</button></a>
                <a href="https://www.linkedin.com/in/paul-cloud-5358b320a" target="_blank"><button className="btn linkedin"><img src="/linkedin.png" className="link-logo"/>LinkedIn</button></a>
            </div>
        </nav>
       
    )
    
}