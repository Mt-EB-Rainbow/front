import styled from 'styled-components';

// 양옆 패딩값을 props로 넘겨준다
const GreenBtn = ({ padding, text, onClick }) => {
    const paddingProps = `${padding}px`;
    return (
        <>
            <Btn padding={paddingProps} onClick={onClick}>
                {text}
            </Btn>
        </>
    );
};

export default GreenBtn;

const Btn = styled.button`
    background-color: var(--dark-green);
    color: white;
    padding: 15px ${props => props.padding} 15px ${props => props.padding};
    border: none;
    font-size: 20px;
    font-weight: 500;
    border-radius: 100px;
    cursor: pointer;
`;
