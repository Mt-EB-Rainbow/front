import styled from 'styled-components';
export const ActiveBox = styled.div`
    width: 7.4vh;
    height: 7.4vh;
    background-color: var(--green);
    border-radius: 12px;
    margin-left: 40px;
    margin-right: 40px;
    position: relative;
`;

export const UnActiveBox = styled.div`
    width: 7.4vh;
    height: 7.4vh;
    background-color: var(--pale-green);
    border-radius: 1.1vh;
    margin-left: 2.7vw;
    margin-right: 2.7vw;
`;
export const BoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5.7vh;
    align-items: center;
    margin-bottom: 3.7vh;
`;
export const Num = styled.div`
    font-size: 1.1vh;
    color: var(--dark-gray);
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.5vh;
`;
export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Process = styled.div`
    font-size: 1.4vh;
    color: var(--dark-gray);
    font-weight: 600;
    margin-top: 0.5vh;
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
