import styled from 'styled-components';
export const ActiveBox = styled.div`
    width: 80px;
    height: 80px;
    background-color: var(--green);
    border-radius: 12px;
    margin-left: 40px;
    margin-right: 40px;
    position: relative;
`;

export const UnActiveBox = styled.div`
    width: 80px;
    height: 80px;
    background-color: var(--pale-green);
    border-radius: 12px;
    margin-left: 40px;
    margin-right: 40px;
`;
export const BoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 62px;
    align-items: center;
    margin-bottom: 40px;
`;
export const Num = styled.div`
    font-size: 12px;
    color: var(--dark-gray);
    font-weight: 600;
    text-align: center;
    margin-bottom: 7px;
`;
export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Process = styled.div`
    font-size: 12px;
    color: var(--dark-gray);
    font-weight: 600;
    margin-top: 7px;
    text-align: center;
`;
export const EmojiBox = styled.div`
    position: relative;
`;

export const EmojiWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
`;
