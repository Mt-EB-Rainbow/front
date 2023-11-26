import { useEffect, useState } from 'react';
import BoardsHeader from '../_common/BoardsHeader';
import PageTitle from '../_common/PageTitle';

import * as S from './MentorBoards.style';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllResume } from '../../api/resume';
import { usePagination } from 'react-table';

const isResumeExist = true;

const MentorBoards = () => {
    const navigate = useNavigate();
    const [resumeArr, setResumeArr] = useState([]);

    // 이력서 목록 전체 조회
    useEffect(() => {
        const getResumeData = async () => {
            const res = await getAllResume();
            console.log(res.data?.resumeResponses);
            setResumeArr(res.data?.resumeResponses);
        };
        getResumeData();
    }, []);

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle text={'제출된 이력서'} />
                    <div style={{ height: '6.5rem' }}></div>
                    <BoardsHeader
                        length={resumeArr.length}
                        placeholder={'직무로 검색하기'}
                    />

                    {resumeArr.length ? (
                        resumeArr?.map(el => (
                            <S.Boards key={el.resumeId}>
                                <S.Info>
                                    <S.Name
                                        onClick={() =>
                                            navigate(
                                                `/mentorfeedback/${el.resumeId}`,
                                            )
                                        }
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {el.title}
                                    </S.Name>
                                    <S.JobInfo>2023.10.01</S.JobInfo>
                                </S.Info>
                                <S.Right>
                                    <S.GreenBox>사무보조</S.GreenBox>
                                </S.Right>
                            </S.Boards>
                        ))
                    ) : (
                        <S.Text>아직 등록된 이력서가 없어요.</S.Text>
                    )}
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default MentorBoards;
