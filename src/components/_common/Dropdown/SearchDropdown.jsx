import { useEffect, useState } from 'react';
import styled from 'styled-components';
import dropdown from '../../../assets/dropdown.svg';

const SearchDropdown = ({
    initialValues,
    onSubmit,
    width,
    placeholder,
    marginRight,
}) => {
    const widthProps = `${width}vw`;
    const marginRightProps = `${marginRight}vw`;

    const [values, setValues] = useState(initialValues);
    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                onSubmit(values);
            }}
        >
            <Select
                value={values.category}
                onChange={({ target: { value } }) =>
                    setValues({ ...values, category: value })
                }
                width={widthProps}
                marginRight={marginRightProps}
            >
                <option value={''}>모두</option>
                <option value={'123'}>123</option>
                <option value={'456'}>456</option>
                <option value={'789'}>789</option>
            </Select>
        </form>
    );
};

export default SearchDropdown;

const Select = styled.select`
    appearance: none;
    -webkit-appearance: none; /* 사파리, 크롬 하위버전용 */
    -moz-appearance: none; /* 사파리, 크롬 하위버전용 */

    width: ${props => props.width};
    color: var(--gray);
    border: 1px var(--dark-gray) solid;
    font-size: 20px;
    font-weight: 700;
    border-radius: 12px;
    background-color: var(--white);
    margin-right: ${props => props.marginRight};
    outline: none;
    padding: 2.2vh 0.69vw;

    // 드롭다운 아이콘
    background-image: url(${dropdown});
    background-repeat: no-repeat;
    background-position: calc(100% - 10px) center;

    &::placeholder {
        color: var(--gray);
    }

    // 익스플로러용
    &::-ms-expand {
        display: none;
    }
`;
