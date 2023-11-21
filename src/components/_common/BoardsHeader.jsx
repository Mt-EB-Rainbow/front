import search from '../../assets/search.svg';
import styled from 'styled-components';

const BoardsHeader = ({ length, onClick, placeholder }) => {
    return (
        <>
            <Wrapper>
                <Length>총 {length}건</Length>
                <SearchWrapper>
                    <SearchInput placeholder={placeholder} />
                    <Img src={search} onClick={onClick} />
                </SearchWrapper>
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

const SearchInput = styled.input`
    width: 22vw;
    height: 2rem;
    border-radius: 5rem;
    outline: none;
    font-size: 0.8rem;
    box-sizing: border-box;
    padding: 0.6rem 0.75rem 0.55rem;
    border: 1px solid var(--light-gray);
    margin-right: 1.1vw;

    &::placeholder {
        font-size: 0.8rem;
    }
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Length = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
`;
const Img = styled.img`
    cursor: pointer;
`;
