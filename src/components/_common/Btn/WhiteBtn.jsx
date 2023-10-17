import styled from 'styled-components';

const WhiteBtn = ({ text }) => {
    return (
        <div>
            <Btn>{text}</Btn>
        </div>
    );
};

export default WhiteBtn;

const Btn = styled.button`
    background-color: white;
    color: #018c0d;
    padding: 13px 13px 13px 13px;
    font-size: 18px;
    font-family: var(--korean);
    font-weight: 600;
    border: 1px solid #d8d8d8;
    border-radius: 10px;
    cursor: pointer;
`;
