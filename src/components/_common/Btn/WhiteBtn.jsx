import styled from 'styled-components';

const WhiteBtn = ({ text, onClick, marginSide, font }) => {
    const marginSideProps = `${marginSide}rem`;
    const fontProps = font ? `${font}rem` : '1rem';

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
    padding: 0.5rem;
    font-size: ${props => props.font};
    font-family: var(--korean);
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 0 ${props => props.marginSide};
    /* margin-left: ${props => props.marginLeft}; */
`;
