import styled from 'styled-components';

// 페이지 나타내는 타이틀 컴포넌트
const PageTitle = ({ text }) => {
    return (
        <>
            <Title>{text}</Title>
        </>
    );
};
export default PageTitle;

export const Title = styled.div`
    margin-top: 5rem;
    font-family: var(--korean);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
`;
