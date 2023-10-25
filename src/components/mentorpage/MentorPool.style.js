import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100vw;
`;

export const SlideBox = styled.div`
    background-color: var(--pale-gray);
    width: 83vw;
    height: 29vh;
    box-sizing: border-box;
    padding: 3.7vh;
    margin-bottom: 3.7vh;
    border-radius: 1.8vh;
    margin-top: 9.2vh;
`;
export const GrayBox = styled.div`
    background-color: var(--pale-gray);
    width: 83vw;
    height: 13.5vh;
    box-sizing: border-box;
    padding: 3.7vh;
    margin-bottom: 7.4vh;
    border-radius: 1.8vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BoxTitle = styled.span`
    font-size: 2.2vh;
    font-weight: 700;
`;

export const Box = styled.div`
    width: 80vw;
    height: 18vh;
    background-color: var(--pale-green);
    box-sizing: border-box;
    padding: 1.8vh;
    display: flex;
    justify-content: center;
`;

export const SlideContent = styled.div``;

export const Boards = styled.div`
    border-bottom: 0.1em solid var(--light-gray);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 83vw;
    height: 16.6vh;
    box-sizing: border-box;
    padding: 1.6vh 1.4vw;
`;

export const Info = styled.div``;

export const ResumeBtn = styled.div`
    box-sizing: border-box;
    font-size: 1.8vh;
    color: var(--dark-green);
    font-weight: 700;
    cursor: pointer;
    padding: 1vh;
`;

export const Name = styled.span`
    font-size: 2vh;
    font-weight: 600;
    margin-right: 0.8vw;
`;
export const JobInfo = styled.span`
    color: var(--gray);
`;

export const ConnectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.8vh;
`;
export const Connect = styled.div`
    background-color: var(--green);
    font-size: 1.5vh;
    width: 4.7vw;
    height: 2.4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.9vh;
    margin-right: 1vw;
`;
export const ConnectInfo = styled.span`
    font-size: 1.8vh;
    color: var(--dark-gray);
    margin-right: 1.3vw;
`;

export const WhoAmI = styled.div`
    font-size: 1.8vh;
    margin-top: 1.5vh;
`;

export const Select = styled.span`
    color: ${props => (props.isSelected ? '#767676' : '#A7A7A7')};
    margin-right: 2vw;
    font-size: 1.8vh;
`;

export const SelectWrapper = styled.div`
    margin-top: 0.8vh;
`;
