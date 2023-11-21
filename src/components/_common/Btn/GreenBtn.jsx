import styled from 'styled-components';

// 양옆 패딩값을 props로 넘겨준다
const GreenBtn = ({
    padding,
    text,
    onClick,
    width,
    height,
    bottom,
    radius,
}) => {
    const paddingProps = `${padding}vw`;
    const widthProps = `${width}vw`;
    const heightProps = `${height}vh`;
    const MarginBottomProps = `${bottom}vh`;
    const radiusProps = `${radius}vh`;
    return (
        <>
            <Btn
                padding={paddingProps}
                width={widthProps}
                height={heightProps}
                onClick={onClick}
                bottom={MarginBottomProps}
                radius={radiusProps}
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
    border-radius: ${props => props.radius};
    cursor: pointer;
    width: ${props => props.width};
    height: ${props => props.height};
    margin-bottom: ${props => props.bottom};
`;
