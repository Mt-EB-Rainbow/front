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
    width: 19.16vw;
    height: 29.3vh;
    text-decoration: none;
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 23vh;
    border: none;
    border-radius: 2.2vh;
    margin-bottom: 0.69vh;
    background-image: url(${thumbnail});
    background-repeat: no-repeat;
    background-size: contain;
`;

export const Title = styled.div`
    width: 100%;
    height: 5.2vh;
    color: var(--black);
    font-size: 20px;
    font-weight: 600;
`;
