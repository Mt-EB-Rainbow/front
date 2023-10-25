import styled from 'styled-components';

const WhiteBtn = ({ text, onClick, marginSide, font }) => {
    const marginSideProps = `${marginSide}vw`;
    const fontProps = font ? `${font}vh` : '1.6vh';

    return (
        <div>
            <Btn
                onClick={onClick}
                marginSide={marginSideProps}
                font={fontProps}
            >
                {text}
            </Btn>
        </div>
    );
};

export default WhiteBtn;

const Btn = styled.button`
    background-color: white;
    color: #018c0d;
    padding: 1.2vh;
    font-size: ${props => props.font};
    font-family: var(--korean);
    font-weight: 600;
    border: 0.1em solid #d8d8d8;
    border-radius: 0.9vh;
    cursor: pointer;
    margin: 0 ${props => props.marginSide};
    /* margin-left: ${props => props.marginLeft}; */
`;
