import styled from 'styled-components';

const BoardsHeader = ({ length }) => {
    return (
        <>
            <Wrapper>
                <Length>총 {length}건</Length>
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
    justify-content: left;
`;

const Length = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
`;
