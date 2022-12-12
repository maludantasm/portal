import { FooterStyle, FooterMedia, FooterMediaA } from '../styles/footerStyle.js';

export const Footer = (props) => {
    return (
        <FooterStyle>
            <FooterMedia>
                <FooterMediaA href='https://www.linkedin.com/in/maria-luiza-dantas' target='_blank'>Linkedin</FooterMediaA>
                <FooterMediaA href='https://www.instagram.com/maludantasm/?next=%2F' target='_blank'>Instagram</FooterMediaA>
                <FooterMediaA href='https://github.com/maludantasm' target='_blank'>GitHub</FooterMediaA>
            </FooterMedia>
            <div className='copyright'>
                <p>© 2022 All rights reserved</p>
            </div>
        </FooterStyle>
    )
}