import PageTitle from '../_common/PageTitle';
import * as S from './Childcare.style';
import React, { useState } from 'react';
import { useMemo } from 'react';

//  select 라이브러리
import { Select, Space } from 'antd';
//  checkbox 라이브러리
import { Checkbox } from 'antd';
import './CheckBox.css';
import Table from './Table';
import NoTable from './NoTable';
//api
import { GetChildApi } from '../../api/child';

// select option
const provinceData = [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
];

const Childcare = () => {
    const [current, setCurrent] = useState(false);
    const [dong, setDong] = useState('');
    const pageNum = 1;
    //get받아온 배열 저장
    const [nurturesArray, setNurturesArray] = useState([]);

    // Select box
    const [district, setDistrict] = useState(provinceData[0]);

    const handleProvinceChange = value => {
        setDistrict(value);
    };

    //보육시설 get`
    const getchild = async () => {
        console.log(district);
        console.log(dong);
        console.log(pageNum);

        try {
            const res = await GetChildApi(district, dong, pageNum);
            console.log(res.data.nurturesResponse);
            if ((res.status == 200) | (res.status == 201)) {
                setNurturesArray(res.data.nurturesResponse);
            }
        } catch (err) {
            console.log(err);
            alert('입력값을 확인해주세요!');
        }
    };

    //티오있는 시설 리스트 필터링
    const TO = nurturesArray.filter(el => el.capacity != el.current);
    console.log(TO);

    // 체크 박스
    const onChange = e => {
        console.log(`checked = ${e.target.checked}`);
        setCurrent(!current);
    };

    // 표 header
    const columns = useMemo(
        () => [
            {
                accessor: 'num',
                Header: '번호',
            },
            {
                accessor: 'name',
                Header: '시설 이름',
            },
            {
                accessor: 'full',
                Header: '정원',
            },
            {
                accessor: 'now',
                Header: '현원',
            },
            {
                accessor: 'address',
                Header: '주소',
            },
        ],
        [],
    );
    const data = useMemo(
        () =>
            nurturesArray.map((el, index) => ({
                num: index + 1,
                name: el.schoolName,
                full: el.capacity,
                now: el.current,
                address: el.address,
            })),
        [nurturesArray],
    );

    const TOdata = useMemo(
        () =>
            TO.map((el, index) => ({
                num: index + 1,
                name: el.schoolName,
                full: el.capacity,
                now: el.current,
                address: el.address,
            })),
        [TO],
    );

    return (
        <>
            <S.Container>
                <S.Wrapper nurturesArray={nurturesArray.length}>
                    <PageTitle text={'인근 보육 시설 조회'} />
                    <S.GrayBox>
                        <S.BoxTitle>
                            믿고 맡길 수 있는 보육 시설을 찾아보세요!
                        </S.BoxTitle>
                        <Space wrap>
                            <Select
                                defaultValue='자치구를 선택하세요.'
                                style={{
                                    width: '17rem',
                                    height: '3.5rem',
                                    fontSize: '13rem',
                                }}
                                onChange={handleProvinceChange}
                                value={district}
                                options={provinceData.map(province => ({
                                    label: province,
                                    value: province,
                                }))}
                            />
                            <S.Dong
                                placeholder='행정동을 입력하세요'
                                type='text'
                                value={dong}
                                onChange={e => setDong(e.target.value)}
                            ></S.Dong>
                        </Space>

                        {/* 티오있는 시설만 필터링 */}
                        <Checkbox
                            onChange={onChange}
                            style={{
                                margin: '20px',
                                fontFamily: 'var(--korean)',
                                fontWeight: 700,
                            }}
                        >
                            티오 있는 시설만
                        </Checkbox>
                        <S.CustGreenBtn onClick={getchild}>
                            검색 하기
                        </S.CustGreenBtn>
                    </S.GrayBox>
                    <S.Length>총 {nurturesArray.length}건</S.Length>
                    <S.Line />
                    {nurturesArray.length ? (
                        <Table
                            columns={columns}
                            data={current ? TOdata : data}
                        />
                    ) : (
                        <NoTable />
                    )}
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default Childcare;
