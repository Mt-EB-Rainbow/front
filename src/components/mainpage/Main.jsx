import { S } from './Main.style';
import Banner from './Banner';

const Main = () => {
    return (
        <S.Wrapper>
            <Banner />
            <S.InfoBox>
                <S.TextBox>
                    <S.Title fontSize='28px'>‘경력 인정’ 프로그램이란?</S.Title>
                    <S.Text>
                        경력보유여성의 경력 공백기에 대한 회고를 통해
                        경력인정서도 발급받고 이력서와 자기소개서도 완성하기
                        위한 전문 컨설턴트와의 1:1 프로그램
                    </S.Text>
                </S.TextBox>
                <S.Button>프로그램 신청</S.Button>
            </S.InfoBox>
            <S.NewContainer>
                <S.InnerContainer>
                    <S.Title>새로 등록된 합격 이력서를 확인해보세요!</S.Title>
                    <S.InnerBox></S.InnerBox>
                </S.InnerContainer>
                <S.InnerContainer>
                    <S.Title>새로 등록된 질문에 대답해주세요!</S.Title>
                    <S.InnerBox></S.InnerBox>
                </S.InnerContainer>
            </S.NewContainer>
        </S.Wrapper>
    );
};
export default Main;
