import styled from 'styled-components';

// 양옆 패딩값을 props로 넘겨준다
const BigSearchInput = ({ width, placeholder, marginRight, padding }) => {
    const widthProps = `${width}vw`;
    const marginRightProps = `${marginRight}vw`;
    const paddingProps = `${padding}vw`;
    return (
        <>
            <Input
                width={widthProps}
                placeholder={placeholder}
                marginRight={marginRightProps}
                padding={paddingProps}
            ></Input>
        </>
    );
};

export default BigSearchInput;

const Input = styled.input`
    width: ${props => props.width};
    color: var(--gray);
    border: 1px var(--dark-gray) solid;
    font-size: 20px;
    font-weight: 700;
    border-radius: 12px;
    background-color: var(--white);
    margin-right: ${props => props.marginRight};
    padding: 2.2vh ${props => props.padding};
    outline: none;

    &::placeholder {
        color: var(--gray);
    }
`;
