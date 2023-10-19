import styled from 'styled-components';

const WhiteBtn = ({ text, onClick, margin }) => {
    return (
        <div>
            <Btn onClick={onClick} margin={margin}>
                {text}
            </Btn>
        </div>
    );
};

export default WhiteBtn;

const Btn = styled.button`
    background-color: white;
    color: #018c0d;
    padding: 13px;
    font-size: 18px;
    font-family: var(--korean);
    font-weight: 600;
    border: 1px solid #d8d8d8;
    border-radius: 10px;
    cursor: pointer;
    margin: ${props => props.margin};
`;
