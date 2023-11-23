import styled from 'styled-components';
import thumbnail from '../../../assets/support_thumbnail.png';

const SiteCard = ({ title, text, onClick }) => {
    return (
        <>
            <Wrapper>
                <Banner>
                    <Title>{title}</Title>
                </Banner>
                <Content>
                    <Text>{text}</Text>
                </Content>
            </Wrapper>
        </>
    );
};

export default SiteCard;

const Wrapper = styled.div`
    width: 18.05rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const Banner = styled.div`
    width: 100%;
    height: 9.1rem;
    background-image: url(${thumbnail});
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    border-radius: 1rem 1rem 0 0;
`;

const Title = styled.div`
    font-weight: 700;
    color: var(--white);
    margin: 0 auto;
    font-size: 2rem;
    cursor: default;
`;

const Content = styled.div`
    width: 100%;
    height: 8.2rem;
    background-color: var(--pale-gray);
    color: white;
    border: none;
    border-radius: 0 0 1rem 1rem;
`;

const Text = styled.div`
    width: 15.35rem;
    font-size: 1rem;
    color: #545454;
    margin: 1.6rem 1.4rem;
`;
