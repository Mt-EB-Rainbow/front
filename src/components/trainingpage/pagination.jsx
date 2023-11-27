import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Pagination = ({ total }) => {
    const navigate = useNavigate();
    const [startPage, setStartPage] = useState(1);

    // 마지막 페이지 구하기
    const lastPage = Math.ceil(total / 10);

    const onClickPage = newPage => {
        // refetch 함수 안에는 variables를 써줘야한다. 하지만 variables를 써줄 필요는 없음
        navigate(`?page=${newPage}`);
    };

    const onClickPrevPage = () => {
        if (startPage === 1) return;
        setStartPage(startPage - 10);
        navigate(`?page=${startPage - 10}`);
    };

    const onClickNextPage = () => {
        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10);
            navigate(`?page=${startPage + 10}`);
        }
    };
    //목록의 전체개수
    return (
        <>
            <div>
                <Wrapper>
                    <PageBtn onClick={onClickPrevPage}>{`<`}</PageBtn>

                    {new Array(10).fill(1).map((_, index) =>
                        index + startPage <= lastPage ? (
                            <PageNum key={index + startPage}>
                                <span
                                    id={String(index + startPage)}
                                    onClick={onClickPage}
                                >
                                    {index + startPage}
                                </span>
                            </PageNum>
                        ) : (
                            <span></span>
                        ),
                    )}
                    <PageBtn onClick={onClickNextPage}>{`>`}</PageBtn>
                </Wrapper>
            </div>
        </>
    );
};

export default Pagination;
export const PageNum = styled.span`
    padding: 10px 10px 10px 10px;
    cursor: pointer;
`;

export const PageBtn = styled.span`
    padding: 10px 10px 10px 10px;
    cursor: pointer;
`;
export const Wrapper = styled.div`
    margin-top: 20px;
`;
