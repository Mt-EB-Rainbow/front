import styled from 'styled-components';

// 양옆 패딩값을 props로 넘겨준다
const GreenBtn = ({ padding, text, onClick, width, bottom, top }) => {
    const paddingProps = `${padding}rem`;
    const widthProps = `${width}rem`;
    const MarginBottomProps = `${bottom}rem`;
    const MarginTopProps = `${top}rem`;
    return (
        <>
            <Btn
                padding={paddingProps}
                width={widthProps}
                onClick={onClick}
                bottom={MarginBottomProps}
                top={MarginTopProps}
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
    padding: 0.75rem ${props => props.padding} 0.75rem ${props => props.padding};
    border: none;
    font-size: 1.8vh;
    font-weight: 500;
    border-radius: 90vh;
    cursor: pointer;
    width: ${props => props.width};
    margin-bottom: ${props => props.bottom};
    margin-top: ${props => props.top};
`;
