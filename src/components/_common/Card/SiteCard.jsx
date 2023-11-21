import styled from 'styled-components';

const SiteCard = ({ img, title, text, onClick }) => {
    return (
        <Wrapper>
            <Banner img={img}>{title}</Banner>
            <Content onClick={onClick}>{text}</Content>
        </Wrapper>
    );
};

export default SiteCard;

const Wrapper = styled.div``;

const Banner = styled.div`
    width: 12px;
`;

const Card = styled.div`
    background-color: var(--dark-green);
    color: white;
    border: none;
    font-size: 1.8vh;
    font-weight: 500;
    border-radius: 90vh;
    cursor: pointer;
`;
