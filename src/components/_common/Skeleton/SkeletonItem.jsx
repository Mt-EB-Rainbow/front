import styled from 'styled-components';

const Skeleton = ({ width, height }) => {
    const widthProps = `${width}`;
    const heightProps = `${height}`;
    return <SkeletonUi width={widthProps} height={heightProps} />;
};

export default Skeleton;

export const SkeletonUi = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: var(--light-gray);
    position: relative;
    overflow: hidden;
    border-radius: 4px;

    @keyframes skeleton-gradient {
        0% {
            background-color: rgba(165, 165, 165, 0.1);
        }
        50% {
            background-color: rgba(165, 165, 165, 0.3);
        }
        100% {
            background-color: rgba(165, 165, 165, 0.1);
        }
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: skeleton-gradient 1.5s infinite ease-in-out;
    }
`;
