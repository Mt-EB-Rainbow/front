import { useNavigate } from 'react-router-dom';
import { S } from './Main.style';
import Banner from './Banner';
import MenuBtn from './MenuBtn';
import dic from '../../assets/mainpage/dic.svg';
import child from '../../assets/mainpage/child.svg';
import edu from '../../assets/mainpage/edu.svg';
import info from '../../assets/mainpage/info.svg';
import recommend from '../../assets/mainpage/recommend.svg';
import write from '../../assets/mainpage/write.svg';

const Main = () => {
    const isMentor = false;
    const navigate = useNavigate();
    const mentorTxt =
        '재취업에 성공한 경력보유여성이신가요?\n잠깐 시간 내어 비슷한 어려움을 겪고 있는 후배들을 도와주세요!';
    return (
        <S.Wrapper>
            <Banner />
            {isMentor ? (
                <S.InfoBox>
                    <S.Title style={{ marginLeft: '2rem' }}>
                        {mentorTxt}
                    </S.Title>
                    <S.Button>이력서 피드백하러 가기</S.Button>
                </S.InfoBox>
            ) : (
                <></>
            )}
            <S.NewContainer margin='4rem 0 0 0'>
                <S.InnerContainer>
                    <S.Title>어떤 일을 해야 할지 고민이신가요?</S.Title>
                    <MenuBtn
                        title='직무 백과'
                        text='직무별 필요 역량과 근무 조건 알아보기'
                        icon={dic}
                        onclick={() => navigate('/dictionary')}
                    />
                    <MenuBtn
                        title='상황 기반 직무 추천'
                        text='지금 내 상황에 맞는 추천 직무 알아보기'
                        icon={recommend}
                        onclick={() => navigate('/recommend')}
                    />
                </S.InnerContainer>
                <S.InnerContainer>
                    <S.Title>하고 싶은 일이 있으신가요?</S.Title>
                    <MenuBtn
                        title='직업 교육'
                        text='최신 교육과정을 통해 취업 역량 높이기'
                        icon={edu}
                        onclick={() => navigate('/training')}
                    />
                    {isMentor ? (
                        <MenuBtn
                            title='이력서 피드백'
                            text='동종업계 후배들의 이력서 피드백하기'
                            icon={write}
                            onclick={() => navigate('/mentorboards')}
                        />
                    ) : (
                        <MenuBtn
                            title='이력서 작성'
                            text='이력서 준비하고 업계 멘토 피드백 받기'
                            icon={write}
                            onclick={() => navigate('/resume')}
                        />
                    )}
                </S.InnerContainer>
            </S.NewContainer>
            <S.NewContainer margin='2rem 0 0 0'>
                <S.InnerContainer>
                    <S.Title>아이가 있으신가요?</S.Title>
                    <MenuBtn
                        title='인근 보육 시설 조회'
                        text='믿을 수 있는 인근 보육 시설 알아보기'
                        icon={child}
                        onclick={() => navigate('/childcare')}
                    />
                </S.InnerContainer>
                <S.InnerContainer>
                    <S.Title>더 많은 도움이 필요하신가요?</S.Title>
                    <MenuBtn
                        title='취업 지원 사이트 모음'
                        text='다양한 취업 지원 사이트 모아보기'
                        icon={info}
                        onclick={() => navigate('/support')}
                    />
                </S.InnerContainer>
            </S.NewContainer>
        </S.Wrapper>
    );
};
export default Main;
