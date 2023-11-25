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
const provinceData = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구',
'금천구', '노원구', '도봉구','동대문구','동작구', '마포구', '서대문구', '서초구', '성동구','성북구', '송파구', '양천구','영등포구', '용산구', '은평구','종로구','중구','중랑구'];

const Childcare = () => {
    const [isExist, setIsExist] = useState(true);
    const [dong, setDong] = useState('');
    const pageNum = 1;

    // Select box
    const [cities, setCities] = useState(provinceData[0]);

    const handleProvinceChange = value => {
        setCities(value);
    
    };

    //보육시설 get`
    const getchild = async ()=>{
    console.log(cities)
    console.log(dong)
    console.log( pageNum)
        const res = await GetChildApi(cities, dong, pageNum )
         console.log(res)
    }
    
   

    // 체크 박스
    const onChange = e => {
        console.log(`checked = ${e.target.checked}`);
    };

    //  표 header
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
    );``
    const data = useMemo(
        () =>
            Array(7)
                .fill()
                .map((_, index) => ({
                    num: index + 1,
                    name: '(재)천주교서울대교구유지재단 천사어린이집',
                    full: 100,
                    now: 70,
                    address:
                        '서울특별시 송파구 거마로24길 11, (마천동) (마천2동)',
                })),
        [],
    );

    return (
        <>
            <S.Container>
                <S.Wrapper>
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
                                value={cities}
                                options={provinceData.map(province => ({
                                    label: province,
                                    value: province,
                                }))}
                            />
                            <S.Dong placeholder='행정동을 입력하세요' type='text' value={dong} onChange={e=>setDong(e.target.value)}></S.Dong>
                            
                        </Space>
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
                        <S.CustGreenBtn onClick={getchild}>검색 하기</S.CustGreenBtn>
                    </S.GrayBox>
                    <S.Length>총 {isExist ? 'n' : 0}건</S.Length>
                    <S.Line />
                    {isExist ? (
                        <Table columns={columns} data={data} />
                    ) : (
                        <NoTable />
                    )}
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default Childcare;
