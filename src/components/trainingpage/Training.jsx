import GreenBtn from '../_common/Btn/GreenBtn';
import BigSearchInput from '../_common/Input/BigSearchInput';
import PageTitle from '../_common/PageTitle';
import * as S from './Training.style';
import Header from '../trainingpage/Header';
import VideoCard from '../_common/Card/VideoCard';
import { Space, Select } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTraining from '../../hooks/training/useTraining';

const Training = () => {
    const { currentPage, lastPage, training, totalTrainings, loading } =
        useTraining();

    console.log(loading);
    const navigate = useNavigate();
    const PROJECTS_PER_PAGE = 12;
    const videoLength = totalTrainings;

    const categoryData = [
        '전체',
        '취업',
        '창업',
        '자격증,',
        '외국어',
        '정보화',
        'BIZ일반',
    ];

    // console.log(training[0].onlineTrainingTime);
    const educationData = {
        전체: ['전체'],
        취업: [
            '전체',
            'NCS',
            'IT, 웹',
            '상담',
            '정보화',
            '취업준비',
            '사회복지, 보건',
            '영업',
            '직장 예절',
            '경영, 사무',
            '마케팅, 무역, 유통',
            '비즈일반',
            '디자인',
            '서비스',
        ],
        창업: ['전체', '창업 공통', '창업 사례', '창업 전략'],
        자격증: [
            '전체',
            '컴퓨터 활용능력',
            '사무자동화산업기사',
            '요양보호사',
            '손해평가사',
            '직업상담사',
            'ITQ',
            '코딩',
            '유통관리사',
            '텔레마케팅관리사',
            '사회복지사',
            '전산회계',
            '바리스타',
            '청소년상담사',
            'CS리더스관리사',
            '한국사',
            '전산세무',
            '공인중개사',
            '워드프로세서',
            'GTQ(그래픽기술자격)',
            '한국어',
            '제과제빵',
            '관광통역안내사',
            '스포츠지도사',
        ],
        BIZ일반: [
            '전체',
            '기획, 경영',
            '리더십',
            '재무/법',
            '교육',
            '자기개발',
            '커뮤니케이션',
            '시사상식',
            '금융/재테크',
            '조직관리',
            '성과창출',
        ],
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

    const doSearch = () => {
        console.log('검색');
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
                                    <S.SelectUi
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
                                    <S.SelectUi
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
                        <Header length={videoLength} />
                        <S.Body>
                            {training?.map((item, index) => (
                                <S.CardBox key={index}>
                                    <VideoCard
                                        thumbnail={item.fileUrl}
                                        href={item.detailUrl}
                                        title={item.courseName}
                                        loading={loading}
                                    />
                                </S.CardBox>
                            ))}
                        </S.Body>
                        <S.Footer>
                            <S.PaginationUi
                                current={currentPage}
                                total={totalTrainings}
                                pageSize={PROJECTS_PER_PAGE}
                                onChange={newPage => {
                                    navigate(`?page=${newPage}`);
                                }}
                            />
                        </S.Footer>
                    </S.Board>
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default Training;
