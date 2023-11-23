import GreenBtn from '../_common/Btn/GreenBtn';
import BigSearchInput from '../_common/Input/BigSearchInput';
import PageTitle from '../_common/PageTitle';
import * as S from './Training.style';
import useTraining from '../../hooks/useTraining';
import BoardsHeader from '../_common/BoardsHeader';
import VideoCard from '../_common/Card/VideoCard';
import Thumbnail from '../../assets/thumbnail.jpeg';
import { Select, Space } from 'antd';
import React, { useState } from 'react';

// select option
const categoryData = ['취업', '창업'];
const educationData = {
    취업: ['전체', '교육, 컨설팅', '상담'],
    창업: ['전체', '창업 공통', '창업 사례', '창업 전략'],
};

const Training = () => {
    const { filterValues, submitFilter, videoLength } = useTraining();
    const doSearch = () => {
        console.log('검색');
    };
    // Select box
    const [category, setCategory] = useState(categoryData[0]);
    const [education, setEducation] = useState(educationData[categoryData[0]]);
    const onCategoryChange = value => {
        setCategory(value);
        setEducation(educationData[category][0]);
    };
    const onEducationChange = value => {
        setEducation(value);
    };
    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle text={'직업 교육'} />
                    <S.Box>
                        <S.InlineBox>
                            <S.Content>
                                {/* 검색 */}
                                <BigSearchInput
                                    width={22}
                                    placeholder={
                                        '관심 있는 교육 과정을 검색해 보세요'
                                    }
                                    marginRight={0.5}
                                    padding={0.5}
                                />
                                <GreenBtn
                                    paddingHorizontal={1.5}
                                    paddingVertical={1}
                                    text={'검색'}
                                    onClick={doSearch}
                                    width={4.75}
                                    height={3.2}
                                    radius={0.6}
                                />
                            </S.Content>
                            <S.Content>
                                <Space
                                    wrap
                                    style={{
                                        marginRight: '0.5rem',
                                    }}
                                >
                                    <Select
                                        defaultValue='카테고리'
                                        style={{
                                            width: '10.4rem',
                                            height: '3.2rem',
                                            fontSize: '1rem',
                                        }}
                                        onChange={onCategoryChange}
                                        options={categoryData.map(ct => ({
                                            label: ct,
                                            value: ct,
                                        }))}
                                    />
                                    <Select
                                        defaultValue='교육 분야'
                                        style={{
                                            width: '10.4rem',
                                            height: '3.2rem',
                                            fontSize: '1rem',
                                        }}
                                        value={education}
                                        onChange={onEducationChange}
                                        options={educationData[category].map(
                                            edu => ({
                                                label: edu,
                                                value: edu,
                                            }),
                                        )}
                                    />
                                </Space>
                                <GreenBtn
                                    padding={1.5}
                                    text={'검색'}
                                    onClick={doSearch}
                                    width={4.75}
                                    height={3.2}
                                    radius={0.6}
                                />
                            </S.Content>
                        </S.InlineBox>
                    </S.Box>
                    <S.Board>
                        <BoardsHeader
                            length={videoLength}
                            onClick={doSearch}
                            placeholder={'제목 및 내용으로 검색'}
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
            </S.Container>
        </>
    );
};

export default Training;
