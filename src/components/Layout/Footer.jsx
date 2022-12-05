import React from 'react'
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>B.Tech Burger Wala</h2>
                <p>Hundreds of flavors under one roof.</p>
                <br />
                <em>We give attention to genuine feedback.</em>
                <strong>© 2022 B.Tech Burger Wala - All Rights Reserved</strong>
            </div>
            <aside>
                <h3>Follow us on</h3>
                <ul>
                    <li><a href="https://www.youtube.com/channel/UCjASi9icEy6YpbGFMdgKlWw" id='youtube'><AiFillYoutube /></a></li>
                    <li><a href="https://www.linkedin.com/in/tushar-verma-0129/" id='linkedin'><AiFillLinkedin /></a></li>
                    <li><a href="https://github.com/TusharV88" id='github'><AiFillGithub /></a></li>
                </ul>
            </aside>
        </footer>
    )
}

export default Footer