import search from '../../assets/search.svg';
import styled from 'styled-components';

const BoardsHeader = ({ length, onClick }) => {
    return (
        <>
            <Wrapper>
                <Length>총 {length}건</Length>
                <SearchWrapper>
                    <SearchInput placeholder='제목 또는 작성자명으로 검색' />
                    <Img src={search} onClick={onClick} />
                </SearchWrapper>
            </Wrapper>
        </>
    );
};

export default BoardsHeader;

const Wrapper = styled.div`
    width: 83vw;
    height: 5.2vh;
    border-bottom: 0.1em solid var(--light-gray);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SearchInput = styled.input`
    width: 22vw;
    height: 3.7vh;
    border-radius: 9.2vh;
    outline: none;
    font: 1.5vh;
    box-sizing: border-box;
    padding: 1.1vh 1.1vw;
    border: 0.1em solid var(--light-gray);
    margin-right: 1.1vw;

    &::placeholder {
        font-size: 1.5vh;
    }
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Length = styled.div`
    font-size: 1.5vh;
    font-weight: 600;
`;
const Img = styled.img`
    cursor: pointer;
`;
