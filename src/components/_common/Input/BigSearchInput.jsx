import styled from 'styled-components';

// 양옆 패딩값을 props로 넘겨준다
const BigSearchInput = ({ width, placeholder, marginRight, padding }) => {
    const widthProps = `${width}rem`;
    const marginRightProps = `${marginRight}rem`;
    const paddingProps = `${padding}rem`;
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
    color: var(--black);
    border: 1px #d9d9d9 solid;
    font-size: 1rem;
    border-radius: 0.6rem;
    background-color: var(--white);
    margin-right: ${props => props.marginRight};
    padding: 1rem ${props => props.padding};
    outline: none;

    &::placeholder {
        color: var(--gray);
    }
`;
