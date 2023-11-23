import { S } from './Main.style';
import arrow from '../../assets/mainpage/arrow.svg';
const MenuBtn = ({ title, text, icon }) => {
    return (
        <S.InnerBox>
            <S.Icon src={icon} />
            <S.InnerContainer>
                <S.Title fontSize='1.2rem' marginB='0.2rem'>
                    {title}
                </S.Title>
                <S.Text>{text}</S.Text>
            </S.InnerContainer>
            <S.Icon src={arrow} width='1rem' />
        </S.InnerBox>
    );
};
export default MenuBtn;
