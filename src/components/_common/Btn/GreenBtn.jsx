import styled from 'styled-components';

// 양옆 패딩값을 props로 넘겨준다
const GreenBtn = ({ padding, text, onClick, width, bottom }) => {
    const paddingProps = `${padding}vw`;
    const widthProps = `${width}vw`;
    const MarginBottomProps = `${bottom}vh`;
    return (
        <>
            <Btn
                padding={paddingProps}
                width={widthProps}
                onClick={onClick}
                bottom={MarginBottomProps}
            >
                {text}
            </Btn>
        </>
    );
};

export default GreenBtn;

const Btn = styled.button`
    background-color: var(--dark-green);
    color: white;
    padding: 1.5vh ${props => props.padding} 1.5vh ${props => props.padding};
    border: none;
    font-size: 1.8vh;
    font-weight: 500;
    border-radius: 90vh;
    cursor: pointer;
    width: ${props => props.width};
    margin-bottom: ${props => props.bottom};
`;
