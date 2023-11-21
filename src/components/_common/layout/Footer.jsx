import { FooterBox, Text } from './Footer.style';

const Footer = () => {
    return (
        <div>
            <FooterBox>
                <Text>©Mt.EB Rainbow. All rights Reserved.</Text>
                <Text>
                    Contact |{' '}
                    <a href='https://github.com/Mt-EB-Rainbow'>
                        https://github.com/Mt-EB-Rainbow
                    </a>
                </Text>
            </FooterBox>
        </div>
    );
};
export default Footer;
