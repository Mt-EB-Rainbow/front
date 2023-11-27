import styled from 'styled-components';
import CardSkeleton from '../Skeleton/CardSkeleton';

const VideoCard = ({ thumbnail, href, title, loading }) => {
    return (
        <>
            {loading ? (
                <>
                    <div>
                        <CardSkeleton
                            contentHeight='2.5rem'
                            titleHeight='10.35rem'
                            width='13.75rem'
                        />
                    </div>
                </>
            ) : (
                <a
                    href={href}
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Wrapper>
                        <Thumbnail thumbnail={thumbnail} />
                        <Title>{title}</Title>
                    </Wrapper>
                </a>
            )}
        </>
    );
};

export default VideoCard;

export const Wrapper = styled.div`
    width: 13.75rem;
    height: 13.2rem;
    text-decoration: none;
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 10.35rem;
    border: none;
    border-radius: 1rem;
    margin-bottom: 0.5rem;
    background-image: url(${props => props.thumbnail});
    background-repeat: no-repeat;
    background-size: contain;
`;

export const Title = styled.div`
    width: 100%;
    height: 2.5rem;
    color: var(--black);
    font-size: 1rem;
    font-weight: 600;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
`;

// const SkeletonStyled = styled(Skeleton)`
//     width: 100%;
//     height: 10.35rem;
//     border-radius: ${props => props.borderRadius || '0'};
//     margin-bottom: 0.5rem;
// `;
