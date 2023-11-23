import { S } from './Dictionary.style';
import { useState } from 'react';
import PageTitle from '../_common/PageTitle';
import BigSearchInput from '../_common/Input/BigSearchInput';
import GreenBtn from '../_common/Btn/GreenBtn';
import { Select, Space } from 'antd';
import smile from '../../assets/dictionarypage/smile.svg';
import cry from '../../assets/dictionarypage/cry.svg';

const categoryData = ['교육분야', '금융 · 보험 · 경영 · 사무 분야'];
const jobData = {
    교육분야: [
        '독서 논술 지도사',
        '보육교사',
        '요가지도사',
        '체험학습강사',
        '학원강사',
        '특수아보조교사',
        '학교방과후교사',
        '도시농업지도사',
    ],
    '금융 · 보험 · 경영 · 사무 분야': ['전체'],
};

const Dictionary = () => {
    const [category, setCategory] = useState(categoryData[0]);
    const [job, setJob] = useState('직무 이름');
    const onCategoryChange = value => {
        setCategory(value);
        setJob(jobData[category][0]);
    };
    const onjobChange = value => {
        setJob(value);
    };
    const doSearch = () => {
        console.log('검색');
    };
    return (
        <S.Wrapper>
            <PageTitle text={'직무 백과'} />
            <S.SearchBox>
                <S.InlineBox>
                    <S.Content>
                        {/* 검색 */}
                        <BigSearchInput
                            width={22}
                            placeholder={
                                '찾고자 하는 직무 이름을 검색해 보세요'
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
                                defaultValue='직무 분야'
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
                                defaultValue='직무 이름'
                                style={{
                                    width: '10.4rem',
                                    height: '3.2rem',
                                    fontSize: '1rem',
                                }}
                                value={job}
                                onChange={onjobChange}
                                options={jobData[category].map(edu => ({
                                    label: edu,
                                    value: edu,
                                }))}
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
            </S.SearchBox>
            <S.JobTitle>{job}</S.JobTitle>
            <S.InfoBox>
                <S.InfoTitle>직무 소개</S.InfoTitle>
                <S.Line />
                <S.Info>
                    보육의 개념과 필요성, 보육관련법, 보육시설의 형태와 유형별
                    특징 등 보육교사가 되기 위한 기본적인 이론에 대해 학습하고
                    보육교사의 역할과 자질에 대해 파악할 수 있다.
                </S.Info>
                <S.InfoTitle>필요 기술 및 지식</S.InfoTitle>
                <S.Line />
                <S.Info>
                    보육의 개념과 필요성, 보육관련법, 보육시설의 형태와 유형별
                    특징 등 보육교사가 되기 위한 기본적인 이론에 대해 학습하고
                    보육교사의 역할과 자질에 대해 파악할 수 있다.
                </S.Info>
                <S.InfoTitle>근무 실태</S.InfoTitle>
                <S.Line />
                <S.Info>
                    보육의 개념과 필요성, 보육관련법, 보육시설의 형태와 유형별
                    특징 등 보육교사가 되기 위한 기본적인 이론에 대해 학습하고
                    보육교사의 역할과 자질에 대해 파악할 수 있다.
                </S.Info>
            </S.InfoBox>
            <S.Content style={{ marginBottom: '4rem' }}>
                <S.RecommendBox>
                    <S.Icon src={smile} />
                    <S.InfoBox width='21.3rem' style={{ marginTop: '1.5rem' }}>
                        <S.InfoTitle>이런 분께 추천해요</S.InfoTitle>
                        <S.Info width='21.3rem' style={{ marginTop: '0.5rem' }}>
                            보육의 개념과 필요성, 보육관련법, 보육시설의 형태와
                            유형별 특징 등 보육교사가 되기 위한 기본적인 이론에
                            대해 학습하고 보육교사의 역할과 자질에 대해 파악할
                            수 있다.
                        </S.Info>
                    </S.InfoBox>
                </S.RecommendBox>
                <S.RecommendBox style={{ marginLeft: '1rem' }}>
                    <S.Icon src={cry} />
                    <S.InfoBox width='21.3rem' style={{ marginTop: '1.5rem' }}>
                        <S.InfoTitle>이런 분께 추천하지 않아요</S.InfoTitle>
                        <S.Info width='21.3rem' style={{ marginTop: '0.5rem' }}>
                            보육의 개념과 필요성, 보육관련법, 보육시설의 형태와
                            유형별 특징 등 보육교사가 되기 위한 기본적인 이론에
                            대해 학습하고 보육교사의 역할과 자질에 대해 파악할
                            수 있다.
                        </S.Info>
                    </S.InfoBox>
                </S.RecommendBox>
            </S.Content>
        </S.Wrapper>
    );
};

export default Dictionary;
