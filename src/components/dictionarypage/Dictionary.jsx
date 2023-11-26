import { S } from './Dictionary.style';
import { useState, useEffect } from 'react';
import PageTitle from '../_common/PageTitle';
import BigSearchInput from '../_common/Input/BigSearchInput';
import { Select, Space } from 'antd';
import {
    GetCategories,
    GetJobInfo,
    GetJobInfoList,
} from '../../api/dictionary';
import { useLocation } from 'react-router';
import smile from '../../assets/dictionarypage/smile.svg';
import cry from '../../assets/dictionarypage/cry.svg';

const Dictionary = () => {
    const [categoryData, setCategoryData] = useState([]); // 전체 카테고리 데이터 배열
    const [jobData, setJobData] = useState([]); // 선택된 카테고리에 속한 직무 이름 배열
    const [selectedCategory, setSelectedCategory] = useState(1); // categoryId int
    const [seletedJob, setSeletedJob] = useState(0); // jobId int
    const [inputName, setInputName] = useState(''); // 직무 이름 string
    const [jobInfo, setJobInfo] = useState([]); // 객체 배열
    const { state } = useLocation();

    const GetCategory = async () => {
        const res = await GetCategories();
        console.log(res);
        setCategoryData(res.categoryResponses);
    };

    const SearchById = async id => {
        const res = await GetJobInfo(id);
        console.log(res);
        setJobInfo([res]);
    };

    const SearchByName = async name => {
        const res = await GetJobInfoList(name);
        console.log(res);
        setJobInfo(res.jobDetailList);
    };

    const onInputChange = e => {
        setInputName(e.target.value);
        console.log(e.target.value);
    };

    const onCategoryChange = categoryId => {
        setSelectedCategory(categoryId);
        setJobData(categoryData[categoryId - 1].jobResponses);
        setSeletedJob([]);
    };

    const onJobChange = jobId => {
        setSeletedJob(jobId);
    };

    useEffect(() => {
        if (state !== null) {
            setSeletedJob(state.jobId);
            SearchById(state.jobId);
        }
        GetCategory();
    }, []);

    return (
        <S.Wrapper>
            <PageTitle text={'직무 백과'} />
            <S.SearchBox>
                <S.InlineBox>
                    <S.Content>
                        <S.Input
                            placeholder={
                                '찾고자 하는 직무 이름을 검색해 보세요'
                            }
                            onChange={onInputChange}
                        />
                        <S.GreenBtn onClick={() => SearchByName(inputName)}>
                            검색
                        </S.GreenBtn>
                    </S.Content>
                    {categoryData.length !== 0 && (
                        <S.Content>
                            <Space
                                wrap
                                style={{
                                    marginRight: '0.5rem',
                                }}
                            >
                                <Select
                                    defaultValue='직무 분야'
                                    style={{
                                        width: '10.4rem',
                                        height: '3.2rem',
                                        fontSize: '1rem',
                                    }}
                                    onChange={onCategoryChange}
                                    options={categoryData.map(ct => ({
                                        label: ct.name,
                                        value: ct.categoryId,
                                    }))}
                                />
                                <Select
                                    defaultValue='직무 이름'
                                    style={{
                                        width: '10.4rem',
                                        height: '3.2rem',
                                        fontSize: '1rem',
                                    }}
                                    value={seletedJob.name}
                                    onChange={onJobChange}
                                    options={jobData.map(edu => ({
                                        label: edu.name,
                                        value: edu.jobId,
                                    }))}
                                />
                            </Space>
                            <S.GreenBtn onClick={() => SearchById(seletedJob)}>
                                검색
                            </S.GreenBtn>
                        </S.Content>
                    )}
                </S.InlineBox>
            </S.SearchBox>
            <S.ResultContainer>
                {jobInfo.length !== 0 && ( // jobInfo는 직무 정보 객체들이 담긴 배열
                    <>
                        {jobInfo.map(item => {
                            // item은 각 직무에 대한 정보 객체
                            return (
                                <div>
                                    <S.JobTitle>{item.name}</S.JobTitle>
                                    <S.InfoBox>
                                        <S.InfoTitle>직무 소개</S.InfoTitle>
                                        <S.Line />
                                        <S.Info>{item.description}</S.Info>
                                        <S.InfoTitle>
                                            필요 기술 및 지식
                                        </S.InfoTitle>
                                        <S.Line />
                                        <S.Info>{item.coreCompetency}</S.Info>
                                        <S.InfoTitle>근무 실태</S.InfoTitle>
                                        <S.Line />
                                        <S.Info>{item.competencies}</S.Info>
                                    </S.InfoBox>
                                    <S.Content
                                        style={{ alignItems: 'flex-start' }}
                                    >
                                        <S.RecommendBox>
                                            <S.Icon src={smile} />
                                            <S.InfoBox
                                                width='21.3rem'
                                                style={{ marginTop: '1.5rem' }}
                                            >
                                                <S.InfoTitle>
                                                    이런 분께 추천해요
                                                </S.InfoTitle>
                                                <S.Info
                                                    width='21.3rem'
                                                    style={{
                                                        margin: '0.5rem 0 2rem 0',
                                                    }}
                                                >
                                                    {item.pros}
                                                </S.Info>
                                            </S.InfoBox>
                                        </S.RecommendBox>
                                        <S.RecommendBox
                                            style={{ marginLeft: '1rem' }}
                                        >
                                            <S.Icon src={cry} />
                                            <S.InfoBox
                                                width='21.3rem'
                                                style={{ marginTop: '1.5rem' }}
                                            >
                                                <S.InfoTitle>
                                                    이런 분께 추천하지 않아요
                                                </S.InfoTitle>
                                                <S.Info
                                                    width='21.3rem'
                                                    style={{
                                                        margin: '0.5rem 0 2rem 0',
                                                    }}
                                                >
                                                    {item.cons}
                                                </S.Info>
                                            </S.InfoBox>
                                        </S.RecommendBox>
                                    </S.Content>
                                </div>
                            );
                        })}
                    </>
                )}
            </S.ResultContainer>
        </S.Wrapper>
    );
};

export default Dictionary;
