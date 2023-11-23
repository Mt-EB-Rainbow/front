import { styled } from 'styled-components';
import thumbnail from '../../../assets/thumbnail.jpeg';

const VideoCard = props => {
    return (
        <a href={props.href} style={{ textDecoration: 'none' }} target='_blank'>
            <Wrapper>
                <Thumbnail thumbnail={props.Thumbnail} />
                <Title>{props.title}</Title>
            </Wrapper>
        </a>
    );
};

export default VideoCard;

export const Wrapper = styled.div`
    width: 13.75rem;
    height: 29.3vh;
    text-decoration: none;
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 10.35rem;
    border: none;
    border-radius: 1rem;
    margin-bottom: 0.5rem;
    background-image: url(${thumbnail});
    background-repeat: no-repeat;
    background-size: contain;
`;

export const Title = styled.div`
    width: 100%;
    height: 2.35rem;
    color: var(--black);
    font-size: 1rem;
    font-weight: 600;
`;
