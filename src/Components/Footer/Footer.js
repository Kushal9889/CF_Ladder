import GitHubButton from 'react-github-btn'


const Footer = () => {
    return (
        <footer className="footer">


            <div className='copyright'>
                <p className='px'> If you found this useful, you can buy me a coffee ☕️ or give a follow ✨ </p>
                <GitHubButton href="https://github.com/Kushal9889" data-color-scheme="no-preference: dark; light: light_high_contrast; dark: dark_high_contrast;" data-size="small" aria-label="Follow @Kushal9889 on GitHub">Follow </GitHubButton>

            </div>
            <div className='copyright'>
                <p className='px'> ©  Kushal Gaddamwar.</p>
                <img src="https://visitor-badge.glitch.me/badge?page_id=cfladder-kushal9889"></img>
            </div>
        </footer>
    )
}
export default Footer;