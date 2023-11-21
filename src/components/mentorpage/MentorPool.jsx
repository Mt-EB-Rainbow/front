import { useNavigate } from 'react-router-dom';
import WhiteBtn from '../_common/Btn/WhiteBtn';
import PageTitle from '../_common/PageTitle';
import * as S from './MentorPool.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BoardsHeader from '../_common/BoardsHeader';

const MentorPool = () => {
    const navigate = useNavigate();
    const goRegist = () => {
        navigate('/mentor/regist');
        window.scrollTo(0, 0);
    };

    const SlideArr = [1, 1, 1, 1, 1, 1];
    return (
        <>
            <S.Wrapper>
                <PageTitle text={'멘토풀'} />
                <S.SlideBox>
                    <S.BoxTitle>
                        00님에게 딱 맞는 멘토에게 조언을 구해보세요!
                    </S.BoxTitle>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true} // 슬라이드 반복 여부
                        loopAdditionalSlides={1}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className='mySwiper'
                    >
                        {SlideArr.map(el => (
                            <SwiperSlide>
                                <S.Box>
                                    <S.SlideContent>
                                        <S.Info>
                                            <S.Name>닉네임</S.Name>
                                            <S.JobInfo>
                                                회사명 | 직무 | 취업시기
                                            </S.JobInfo>
                                            {/* 조건부 */}
                                            <S.ConnectWrapper>
                                                <S.Connect>휴대폰</S.Connect>
                                                <S.ConnectInfo>
                                                    010-0000-0000
                                                </S.ConnectInfo>
                                                <S.Connect>이메일</S.Connect>
                                                <S.ConnectInfo>
                                                    aaaabbbbb11@gmail.com
                                                </S.ConnectInfo>
                                                <S.Connect>카카오톡</S.Connect>
                                                <S.ConnectInfo>
                                                    kakaoId123
                                                </S.ConnectInfo>
                                            </S.ConnectWrapper>
                                            <S.WhoAmI>
                                                저는 누구누구 입니다.
                                            </S.WhoAmI>
                                            <S.SelectWrapper>
                                                <S.Select isSelected={true}>
                                                    재직 회사와 일치하지 않는
                                                    경우
                                                </S.Select>
                                                <S.Select isSelected={false}>
                                                    같은 직무일 경우만 가능
                                                </S.Select>
                                            </S.SelectWrapper>
                                        </S.Info>
                                    </S.SlideContent>
                                </S.Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </S.SlideBox>
                <S.GrayBox>
                    <S.BoxTitle>
                        취업에 성공하셨나요? 멘토로 등록하고 경험을
                        공유해주세요!
                    </S.BoxTitle>
                    <WhiteBtn
                        text={'멘토 등록하기'}
                        onClick={goRegist}
                        font={2.2}
                    />
                </S.GrayBox>

                <BoardsHeader
                    length={10}
                    placeholder={'제목 또는 작성자명으로 검색'}
                />

                <S.Boards>
                    <S.Info>
                        <S.Name>닉네임</S.Name>
                        <S.JobInfo>회사명 | 직무 | 취업시기</S.JobInfo>
                        {/* 조건부 */}
                        <S.ConnectWrapper>
                            <S.Connect>휴대폰</S.Connect>
                            <S.ConnectInfo>010-0000-0000</S.ConnectInfo>
                            <S.Connect>이메일</S.Connect>
                            <S.ConnectInfo>aaaabbbbb11@gmail.com</S.ConnectInfo>
                            <S.Connect>카카오톡</S.Connect>
                            <S.ConnectInfo>kakaoId123</S.ConnectInfo>
                        </S.ConnectWrapper>
                        <S.WhoAmI>저는 누구누구 입니다.</S.WhoAmI>
                        <S.SelectWrapper>
                            <S.Select isSelected={true}>
                                재직 회사와 일치하지 않는 경우
                            </S.Select>
                            <S.Select isSelected={false}>
                                같은 직무일 경우만 가능
                            </S.Select>
                        </S.SelectWrapper>
                    </S.Info>

                    <S.ResumeBtn>이력서 보러가기</S.ResumeBtn>
                </S.Boards>
                {/* =============추후 map()=========================== */}
                <S.Boards>
                    <S.Info>
                        <S.Name>닉네임</S.Name>
                        <S.JobInfo>회사명 | 직무 | 취업시기</S.JobInfo>
                        {/* 조건부 */}
                        <S.ConnectWrapper>
                            <S.Connect>휴대폰</S.Connect>
                            <S.ConnectInfo>010-0000-0000</S.ConnectInfo>
                            <S.Connect>이메일</S.Connect>
                            <S.ConnectInfo>aaaabbbbb11@gmail.com</S.ConnectInfo>
                            <S.Connect>카카오톡</S.Connect>
                            <S.ConnectInfo>kakaoId123</S.ConnectInfo>
                        </S.ConnectWrapper>
                        <S.WhoAmI>저는 누구누구 입니다.</S.WhoAmI>
                        <S.SelectWrapper>
                            <S.Select isSelected={true}>
                                재직 회사와 일치하지 않는 경우
                            </S.Select>
                            <S.Select isSelected={false}>
                                같은 직무일 경우만 가능
                            </S.Select>
                        </S.SelectWrapper>
                    </S.Info>

                    <S.ResumeBtn>이력서 보러가기</S.ResumeBtn>
                </S.Boards>
            </S.Wrapper>
        </>
    );
};

export default MentorPool;
