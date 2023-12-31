import { S } from './Main.style';
import arrow from '../../assets/mainpage/arrow.svg';
const MenuBtn = ({ title, text, icon, onclick }) => {
    return (
        <S.InnerBox onClick={onclick}>
            <S.Icon src={icon} />
            <S.InnerContainer>
                <S.Title fontSize='1.2rem' marginB='0.2rem'>
                    {title}
                </S.Title>
                <S.Text>{text}</S.Text>
            </S.InnerContainer>
            <S.Icon src={arrow} width='1rem' margin='0 2rem 0 0' />
        </S.InnerBox>
    );
};
export default MenuBtn;
