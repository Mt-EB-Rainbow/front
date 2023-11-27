import PageTitle from '../_common/PageTitle';
import * as S from './Training.style';
import Header from '../trainingpage/Header';
import VideoCard from '../_common/Card/VideoCard';
import { Space, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useTraining from '../../hooks/training/useTraining';
import { GetTrainingById, GetTrainingBySearch } from '../../api/TrainingCourse';

const Training = () => {
    const {
        currentPage,
        lastPage,
        training,
        setTraining,
        totalTrainings,
        setTotalTrainings,
        fetchSites,
        setLoading,
        loading,
    } = useTraining();

    const navigate = useNavigate();
    const PROJECTS_PER_PAGE = 12;
    const videoLength = totalTrainings;

    const categoryData = [
        '전체',
        '취업',
        '창업',
        '자격증',
        '외국어',
        '정보화',
        'BIZ일반',
    ];

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
        외국어: [
            '전체',
            '영어',
            '중국어',
            '일본어',
            '베트남어',
            '스페인어',
            '프랑스어',
            '독일어',
            '러시아어',
            '아랍어',
            '이탈리아어',
            '인도네시아어',
            '태국어',
            '포르투갈어',
        ],
        정보화: [
            '전체',
            'OA',
            '프로그래밍',
            '웹프로그래밍',
            '멀티미디어',
            '코딩',
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
    const [category, setCategory] = useState('전체'); // 선택된 카테고리 string
    const [education, setEducation] = useState('전체'); // 선택된 교육 분야 string
    const [inputName, setInputName] = useState(''); // 교육 이름 string
    const [isNameDisable, setIsNameDisable] = useState(true); // 이름으로 검색 버튼 비활성화
    const [isIdDisable, setIsIdDisable] = useState(true); // id로 검색 버튼 비활성화
    const { state } = useLocation(); // 추천 직무 교육에서 넘어온 검색 jobId

    const onCategoryChange = value => {
        setCategory(value);
        setEducation('교육분야');
        setIsIdDisable(true);
    };

    const onEducationChange = value => {
        setEducation(value);
        setIsIdDisable(false);
    };

    const onInputChange = e => {
        if (e.target.value.length > 0) {
            setIsNameDisable(false);
        } else {
            setIsNameDisable(true);
        }
        setInputName(e.target.value);
    };

    const SearchByCategory = async (category, classDomain) => {
        const res = await GetTrainingBySearch(null, category, classDomain);
        console.log(res);
        setTraining(res.educations);
        setTotalTrainings(res.educations.length);
    };

    const SearchByName = async name => {
        const res = await GetTrainingBySearch(name, null, null);
        console.log(res);
        setTraining(res.educations);
        setTotalTrainings(res.educations.length);
    };

    const SearchById = async id => {
        const res = await GetTrainingById(id);
        console.log(res);
        setTraining(res.educations);
        setTotalTrainings(res.educations.length);
    };

    useEffect(() => {
        console.log(loading);
        if (state !== null) {
            setInputName(state.jobName);
            SearchById(state.jobId);
            setIsNameDisable(false);
            setLoading(false);
        } else {
            setLoading(true);
            fetchSites();
        }
    }, [currentPage]);

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <PageTitle text={'직업 교육'} />
                    <S.Box>
                        <S.InlineBox>
                            <S.Content>
                                {/* 검색 */}
                                <S.Input
                                    placeholder={
                                        '찾고자 하는 직무 이름을 검색해 보세요'
                                    }
                                    onChange={onInputChange}
                                    value={inputName}
                                />
                                <S.GreenBtn
                                    disabled={isNameDisable}
                                    onClick={() => SearchByName(inputName)}
                                    backgroundColor={
                                        isNameDisable
                                            ? 'var(--light-gray)'
                                            : 'var(--dark-green)'
                                    }
                                >
                                    검색
                                </S.GreenBtn>
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
                                <S.GreenBtn
                                    disabled={isIdDisable}
                                    onClick={() =>
                                        SearchByCategory(category, education)
                                    }
                                    backgroundColor={
                                        isIdDisable
                                            ? 'var(--light-gray)'
                                            : 'var(--dark-green)'
                                    }
                                >
                                    검색
                                </S.GreenBtn>
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
                                defaultPageSize={PROJECTS_PER_PAGE}
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
