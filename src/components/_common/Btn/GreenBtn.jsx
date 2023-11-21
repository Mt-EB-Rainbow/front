import styled from 'styled-components';

// 양옆 패딩값을 props로 넘겨준다
const GreenBtn = ({
    paddingHorizontal,
    paddingVertical,
    text,
    onClick,
    width,
    height,
    bottom,
    radius,
}) => {
    const horizontalProps = `${paddingHorizontal}rem`;
    const verticalProps = `${paddingVertical}rem`;
    const widthProps = `${width}rem`;
    const heightProps = `${height}rem`;
    const MarginBottomProps = `${bottom}rem`;
    const radiusProps = `${radius}rem`;
    return (
        <>
            <Btn
                horizontal={horizontalProps}
                vertical={verticalProps}
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
    padding: ${props => props.verticalProps} ${props => props.horizontalProps};
    border: none;
    font-size: 1rem;
    font-weight: 500;
    border-radius: ${props => props.radius};
    cursor: pointer;
    width: ${props => props.width};
    height: ${props => props.height};
    margin-bottom: ${props => props.bottom};
`;
