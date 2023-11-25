import styled from 'styled-components';
import Skeleton from './SkeletonItem';

const CardSkeleton = ({ width, titleHeight, contentHeight }) => {
    const widthProps = `${width}`;
    const titleHeightProps = `${titleHeight}`;
    const contentHeightProps = `${contentHeight}`;
    return (
        <Wrapper>
            <Header>
                <Skeleton width={widthProps} height={titleHeightProps} />
            </Header>
            <Content>
                <Skeleton width={widthProps} height={contentHeightProps} />
            </Content>
        </Wrapper>
    );
};
export default CardSkeleton;

export const Wrapper = styled.div`
    width: 13.75rem;
    height: 13.2rem;
`;

export const Header = styled.div`
    margin-bottom: 0.5rem;
`;

export const Content = styled.div``;
