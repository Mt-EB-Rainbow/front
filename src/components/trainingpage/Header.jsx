import styled from 'styled-components';
import { useState } from 'react';
import { Switch } from 'antd';

const BoardsHeader = ({ length }) => {
    const [check, setCheck] = useState(false);
    const onToggle = checked => {
        console.log(`switch to ${checked}`);
        setCheck(!check);
    };
    return (
        <>
            <Wrapper>
                <Length>총 {length}건</Length>
                {/* 공개여부 토글 */}
                <SwitchStyle>
                    <Switch
                        defaultChecked={false}
                        onChange={onToggle}
                        checkedChildren='온라인'
                        unCheckedChildren='오프라인'
                        checked={check}
                    />
                </SwitchStyle>
            </Wrapper>
        </>
    );
};

export default BoardsHeader;

const Wrapper = styled.div`
    width: 59.7rem;
    height: 2.8rem;
    border-bottom: 0.05rem solid var(--light-gray);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Length = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
`;

const SwitchStyle = styled.div`
    margin-top: 1.65rem;
    margin-bottom: 2.15rem;
    width: 41.1rem;
    text-align: right;
`;
