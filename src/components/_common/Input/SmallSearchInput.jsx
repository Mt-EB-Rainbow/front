import styled from 'styled-components';
import search from '../../../assets/search.svg';

// 양옆 패딩값을 props로 넘겨준다
const SmallSearchInput = ({ placeholder, onClick }) => {
    return (
        <>
            <Wrapper>
                <Input placeholder={placeholder}></Input>
                <Img src={search} onClick={onClick} />
            </Wrapper>
        </>
    );
};

export default SmallSearchInput;

const Wrapper = styled.div`
    width: 83vw;
    height: 5.2vh;
    border-bottom: 0.1em solid var(--light-gray);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 22vw;
    height: 4.4vh;
    border-radius: 9.2vh;
    outline: none;
    font: 1.5vh;
    box-sizing: border-box;
    padding: 1.1vh 1.1vw;
    border: 0.1em solid var(--light-gray);
    margin-right: 1.1vw;
    outline: none;

    &::placeholder {
        font-size: 1.5vh;
    }
`;

const Img = styled.img`
    cursor: pointer;
`;
