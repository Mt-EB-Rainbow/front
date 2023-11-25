import GreenBtn from '../_common/Btn/GreenBtn';
import BigSearchInput from '../_common/Input/BigSearchInput';
import PageTitle from '../_common/PageTitle';
import * as S from './Training.style';
import useTrainingFilter from '../../hooks/training/useTrainingFilter';
import Header from '../trainingpage/Header';
import VideoCard from '../_common/Card/VideoCard';
import Thumbnail from '../../assets/thumbnail.jpeg';
// import Pagination from '../_common/Pagination';
import { Space, Select, Pagination } from 'antd';
import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useTraining from '../../hooks/training/useTraining';

const Training = () => {
    const { currentPage, lastPage, training, totalTrainings } = useTraining();
    const navigate = useNavigate();
    const PROJECTS_PER_PAGE = 12;
    const videoLength = totalTrainings;

    // select option
    let categoryData = [];

    for (let i = 0; i < training.length; i++) {
        categoryData.push(training[i].majorCategoryName);
    }
    // category 중복 제거
    categoryData = categoryData.filter(
        (value, index, self) => self.indexOf(value) === index,
    );

    // console.log(training[0].onlineTrainingTime);
    const educationData = {
        // 취업: ['전체', '교육, 컨설팅', '상담'],
        창업: ['전체', '창업 공통', '창업 사례', '창업 전략'],
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
                                        // options={educationData[category].map(
                                        //     edu => ({
                                        //         label: edu,
                                        //         value: edu,
                                        //     }),
                                        // )}
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
