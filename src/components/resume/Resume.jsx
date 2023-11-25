import PageTitle from '../_common/PageTitle';
import * as S from './Resume.style';
import BoardsHeader from '../_common/BoardsHeader';
import GreenBtn from '../_common/Btn/GreenBtn';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetResumeApi, ResumeApi } from '../../api/resume';
import { useRecoilValue } from 'recoil';
import { memberIdState } from '../../recoil/loginState';

const Resume = () => {
    const navigate = useNavigate();
    const [resumeResponses, setResumeResponses] = useState([]);
    const memberId = useRecoilValue(memberIdState);
    console.log(memberId);

    const goNew = async e => {
        e.preventDefault();

        const res = await ResumeApi(memberId);
        console.log(res);
        window.scrollTo(0, 0);
        navigate(`/new/${res.data?.resumeId}`);
    };

    useEffect(() => {
        const getBoards = async () => {
            const res = await GetResumeApi(Number(memberId));
            console.log(res.data?.resumeResponses);
            setResumeResponses(res.data?.resumeResponses);
        };
        getBoards();
    }, []);

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle text={'내 이력서 관리'} />
                    <div style={{ height: '6.5rem' }}></div>
                    <BoardsHeader
                        length={0}
                        placeholder={'제목 및 내용으로 검색'}
                    />

                    {resumeResponses ? (
                        <>
                            {resumeResponses.map(el => (
                                <S.Boards key={el.resumeId}>
                                    <S.Info>
                                        <S.Name
                                            onClick={() => {
                                                navigate(
                                                    `/detail/${el.resumeId}`,
                                                );
                                            }}
                                        >
                                            {el.title}
                                        </S.Name>
                                        <S.JobInfo>2023.10.01</S.JobInfo>

                                        <S.GreenBox>사무보조</S.GreenBox>
                                    </S.Info>
                                    <S.Right>
                                        {/* {isopend? "공개" : "비공개"} 공개면 dark-gray, 비공개면 gray*/}
                                        <S.Open>공개</S.Open>
                                        {/* 수정 / 삭제 버튼 */}

                                        <S.Rewrite>수정</S.Rewrite>
                                        <S.Delete>삭제</S.Delete>
                                    </S.Right>
                                </S.Boards>
                            ))}
                            <div style={{ marginTop: '5rem' }}>
                                <GreenBtn
                                    text={'새 이력서 추가'}
                                    paddingHorizontal={0.75}
                                    width={10.75}
                                    bottom={10}
                                    onClick={goNew}
                                    radius={5}
                                    paddingVertical={2.25}
                                    height={2.7}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <S.Text>아직 등록된 이력서가 없어요.</S.Text>
                            <GreenBtn
                                text={'새 이력서 추가'}
                                paddingHorizontal={0.75}
                                width={10.75}
                                bottom={10}
                                onClick={goNew}
                                radius={5}
                                paddingVertical={2.25}
                                height={2.7}
                            />
                        </>
                    )}
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default Resume;
