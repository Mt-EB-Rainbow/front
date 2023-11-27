import * as S from './NoTable.style';
//로딩
import { Flex, Spin } from 'antd';
import './spin.css'

const NoTable = ({ isloading }) => {
    return (
        <>
            {isloading ?
                <S.Text>
                    <Flex align="center" gap="middle">

                        <Spin size="large" style={{ color: "var(--dark-green)" }} />
                    </Flex>
                </S.Text>
                : <S.Text>조건과 일치하는 보육시설이 없어요.</S.Text>}

        </>
    );
};

export default NoTable;
