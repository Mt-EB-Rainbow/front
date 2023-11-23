import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import chevronLeft from '../../assets/pagination/chevron_left.svg';
import chevronRight from '../../assets/pagination/chevron_right.svg';
import firstPage from '../../assets/pagination/first_page.svg';
import lastPage from '../../assets/pagination/last_page.svg';
import { styled } from 'styled-components';

const Link = href => {
    return <RouterLink to={href}>{children}</RouterLink>;
};

const Pagination = ({ currentPage, lastPage, makePageUrl }) => {
    const pages = useMemo(() => {
        const currentFirstPage = Math.max(currentPage - 2, 1);
        const currentLastPage = Math.min(currentPage + 2, lastPage);
        const _pages = range(currentFirstPage, currentLastPage);
        if (_pages.length < 5) {
            return _pages;
        }
        if (currentPage < 3) {
            return [..._pages, currentLastPage + 1];
        }
        if (currentPage > lastPage - 2) {
            return [currentFirstPage - 1, ..._pages];
        }
        return [currentFirstPage - 1, ..._pages, currentLastPage + 1];
    }, [currentPage, lastPage]);

    // 이전 페이지로 이동하는 링크를 생성하는 함수
    const makeLeftLink = () => {
        const leftPage = pages[0] - 1;
        return (
            <>
                <Button>
                    <Link href={makePageUrl(firstPage)}>{firstPage}</Link>
                </Button>
                <Button>
                    <Link href={makePageUrl(leftPage)}>{chevronLeft}</Link>
                </Button>
            </>
        );
    };

    // 다음 페이지로 이동하는 링크를 생성하는 함수
    const makeRightLink = () => {
        const rightPage = pages[pages.length - 1] + 1;
        return (
            <>
                <Button>
                    <Link href={makePageUrl(rightPage)}>{chevronRight}</Link>
                </Button>
                <Button>
                    <Link href={makePageUrl(lastPage)}>{lastPage}</Link>
                </Button>
            </>
        );
    };
    return (
        <ul>
            {makeLeftLink()}
            {pages.map(page => (
                <li key={page}>
                    <RouterLink
                        href={makePageUrl(page)}
                        aria-label={`Go to page ${page}`}
                        onClick={() => handlePageChange(page)}
                        className='styled-link'
                    >
                        {page}
                    </RouterLink>
                </li>
            ))}
            {makeRightLink()}
        </ul>
    );
};

export default Pagination;
