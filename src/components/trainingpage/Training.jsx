import GreenBtn from '../_common/Btn/GreenBtn';
import SearchDropdown from '../_common/Dropdown/SearchDropdown';
import BigSearchInput from '../_common/Input/BigSearchInput';
import PageTitle from '../_common/PageTitle';
import * as S from './Training.style';
import useTraining from '../../hooks/useTraining';
import SmallSearchInput from '../_common/Input/SmallSearchInput';
import BoardsHeader from '../_common/BoardsHeader';
import VideoCard from '../_common/Card/VideoCard';
import Thumbnail from '../../assets/thumbnail.jpeg';

const Training = () => {
    const { filterValues, submitFilter, videoLength } = useTraining();
    const doSearch = () => {
        console.log('검색');
    };
    return (
        <>
            <S.Wrapper>
                <PageTitle text={'직업 교육'} />
                <S.Box>
                    <S.InlineBox>
                        <S.Content>
                            {/* 검색 */}
                            <BigSearchInput
                                width={29}
                                placeholder={
                                    '관심 있는 교육 과정을 검색해 보세요'
                                }
                                marginRight={0.69}
                                padding={0.69}
                            />
                            <GreenBtn
                                padding={2}
                                text={'검색'}
                                onClick={doSearch}
                                width={6.5}
                                height={7.1}
                                radius={1.3}
                            />
                        </S.Content>
                        <S.Content>
                            {/* 카테고리 */}
                            <SearchDropdown
                                initialValues={filterValues}
                                onSubmit={submitFilter}
                                width={15}
                                marginRight={0.2}
                            />
                            {/* 교육분야 */}
                            <SearchDropdown
                                initialValues={filterValues}
                                onSubmit={submitFilter}
                                width={15}
                                marginRight={0.69}
                            />
                            <GreenBtn
                                padding={2}
                                text={'검색'}
                                onClick={doSearch}
                                width={6.5}
                                height={7.1}
                                radius={1.3}
                            />
                        </S.Content>
                    </S.InlineBox>
                </S.Box>
                <S.Board>
                    <BoardsHeader length={videoLength} onClick={doSearch} />
                    <hr
                        style={{
                            height: '0.5px',
                            background: 'var(--light-gray)',
                            border: 'none',
                        }}
                    />
                    <S.Body>
                        {/* @todo map */}
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                        <S.CardBox>
                            <VideoCard
                                Thumbnail={Thumbnail}
                                href={''}
                                title={
                                    '(자막) [보육/아동복지교사] 기본! 영유아보육 이해하기'
                                }
                            />
                        </S.CardBox>
                    </S.Body>
                    <S.Footer>{/* 페이지네이션 */}</S.Footer>
                </S.Board>
            </S.Wrapper>
        </>
    );
};

export default Training;
