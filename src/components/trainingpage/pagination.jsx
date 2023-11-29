import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Pagination = ({ total, training }) => {
    const navigate = useNavigate();
    const [startPage, setStartPage] = useState(1);

    // // 마지막 페이지 구하기
    const lastPage = Math.ceil(total / 12);
    // console.log(lastPage);

    // // 배열 12개씩 자르기
    // const newArr = [];
    // for (let i = 0; i < lastPage; i++) {
    //     newArr.push(training?.slice(i * 12, i * 12 + 12));
    //     console.log(newArr);
    // }
    // console.log(newArr);

    const onClickPage = e => {
        navigate(`?page=${e.currentTarget.id}`);
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

                    {new Array(12).fill(1).map((_, index) =>
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
