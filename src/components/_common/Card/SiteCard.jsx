import styled from 'styled-components';
import thumbnail from '../../../assets/support_thumbnail.png';

const SiteCard = ({ title, description, siteUrl, imageUrl, onClick }) => {
    return (
        <>
            <a
                href={siteUrl}
                style={{ textDecoration: 'none' }}
                target='_blank'
                rel='noopener noreferrer'
            >
                <Wrapper>
                    <Banner imageUrl={imageUrl}>
                        <Title>{title}</Title>
                    </Banner>
                    <Content>
                        <Text>{description}</Text>
                    </Content>
                </Wrapper>
            </a>
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
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    border-radius: 1rem 1rem 0 0;
    position: relative; // Needed for positioning the pseudo-element
`;

const Title = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: var(--white);
    border-radius: 1rem 1rem 0 0;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
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
