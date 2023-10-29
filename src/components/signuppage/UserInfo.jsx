import PageTitle from '../_common/PageTitle';
import GreenBtn from '../_common/Btn/GreenBtn';
import React from 'react';
import { useState } from 'react';
import * as S from './UserInfo.style';

const UserInfo = () => {
    const [salary1, setSalary1] = useState(2000);
    const [salary2, setSalary2] = useState(5000);

    const onChange = value => {
        // console.log('onChange: ', value);
        setSalary1(value[0]);
        setSalary2(value[1]);
    };
    const onAfterChange = value => {
        console.log('onAfterChange: ', value);
    };
    const style = {
        style: {
            color: '#767676',
            font: '1.1vh',
        },
    };

    const markNumber = {
        0: '0',
        1000: {
            style,
            label: 1000,
        },
        2000: {
            style,
            label: 2000,
        },
        3000: '3000',
        4000: '4000',
        5000: '5000',
        6000: '6000',
        7000: '7000',
        8000: '8000',
        9000: '9000',
        10000: '10000',
    };

    return (
        <>
            <S.Wrapper>
                <PageTitle text={'사용자 맞춤 정보 입력'} />

                <S.Text>거주지 주소</S.Text>
                <S.Line />

                <S.AdressText>우편번호</S.AdressText>
                <S.ZipcodeWrapper>
                    <S.Zipcode />
                    <S.GrayBtn>우편번호 찾기</S.GrayBtn>
                </S.ZipcodeWrapper>
                <S.AdressText>주소</S.AdressText>
                <S.DetailAdress placeholder='주소를 입력하세요.' />
                <S.AdressText>상세 주소</S.AdressText>
                <S.DetailAdress placeholder='상세 주소를 입력하세요.' />

                <S.Text>경력 공백 기간</S.Text>
                <S.Box>
                    <S.CheckWrapper>
                        <S.Check>
                            <input type='radio' />
                            <S.CheckText>1년 미만</S.CheckText>
                        </S.Check>
                        <S.Check>
                            <input type='radio' />
                            <S.CheckText>1년 이상 ~ 2년 미만</S.CheckText>
                        </S.Check>
                        <S.Check>
                            <input type='radio' />
                            <S.CheckText>2년 이상 ~ 3년 미만</S.CheckText>
                        </S.Check>
                        <S.Check>
                            <input type='radio' />
                            <S.CheckText>3년 이상 ~ 4년 미만</S.CheckText>
                        </S.Check>
                        <S.Check>
                            <input type='radio' />
                            <S.CheckText>4년 이상 ~ 5년 미만</S.CheckText>
                        </S.Check>
                        <S.Check>
                            <input type='radio' />
                            <S.CheckText>5년 이상</S.CheckText>
                        </S.Check>
                    </S.CheckWrapper>
                </S.Box>

                <S.Text>성동구 주관 "경력 인정" 프로그램 참여 여부</S.Text>
                <S.Box>
                    <S.CheckWrapper2>
                        <S.CheckText>
                            <S.Radio type='radio' />
                            <span> 현재 참여중</span>
                        </S.CheckText>
                        <S.CheckText>
                            <S.Radio type='radio' /> <span>참여 경험 있음</span>
                        </S.CheckText>
                        <S.CheckText>
                            <S.Radio type='radio' />{' '}
                            <span>참여한 적 없으나 관심 있음</span>
                        </S.CheckText>
                    </S.CheckWrapper2>
                </S.Box>

                <S.Text>희망 연봉 범위 (단위: 만 원)</S.Text>
                <S.Line />

                <S.SliderStyle
                    range={TextTrackCueList}
                    min={0}
                    max={10000}
                    step={1000}
                    defaultValue={[2000, 5000]}
                    onChange={onChange}
                    // onAfterChange={onAfterChange}
                    trackStyle={{ backgroundColor: 'var(--green)' }}
                    railStyle={{ backgroundColor: '#E7E7E7' }}
                    handleStyle={{ Color: 'var(--green)' }}
                    activeDotStyle={{ Color: 'var(--green)' }}
                    marks={markNumber}
                />
                <S.InputWrapper>
                    <S.SalaryInput value={salary1} defaultValue={salary1} />
                    <span>~</span>
                    <S.SalaryInput value={salary2} defaultValue={salary2} />
                </S.InputWrapper>
                <GreenBtn
                    text={'맞춤 정보 제줄'}
                    width={40.4}
                    padding={2}
                    bottom={10}
                />
            </S.Wrapper>
        </>
    );
};

export default UserInfo;
