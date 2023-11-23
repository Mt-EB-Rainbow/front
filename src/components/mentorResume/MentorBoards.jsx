import BoardsHeader from '../_common/BoardsHeader';
import PageTitle from '../_common/PageTitle';

import * as S from './MentorBoards.style';
import { useNavigate } from 'react-router-dom';

const isResumeExist = true;
const MentorBoards = () => {
    const navigate = useNavigate();

    const goFeedBack = () => {
        // 나중에 아이디값 들어가야함
        navigate('/mentorfeedback');
    };

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle text={'제출된 이력서'} />
                    <div style={{ height: '6.5rem' }}></div>
                    <BoardsHeader length={0} />
                    {isResumeExist ? (
                        <S.Boards>
                            <S.Info>
                                <S.Name
                                    onClick={goFeedBack}
                                    style={{ cursor: 'pointer' }}
                                >
                                    사무보조 이력서 초안
                                </S.Name>
                                <S.JobInfo>2023.10.01</S.JobInfo>
                            </S.Info>
                            <S.Right>
                                <S.GreenBox>사무보조</S.GreenBox>
                            </S.Right>
                        </S.Boards>
                    ) : (
                        <S.Text>아직 등록된 이력서가 없어요.</S.Text>
                    )}
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default MentorBoards;
