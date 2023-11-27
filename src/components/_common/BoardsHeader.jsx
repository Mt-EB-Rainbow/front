import search from '../../assets/search.svg';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResumeApi } from '../../api/resume';

const BoardsHeader = ({ length, onClick, placeholder }) => {
    const navigate = useNavigate();

    const location = useLocation();

    const memberId = localStorage.getItem('memberId');

    const goNew = async e => {
        e.preventDefault();

        const res = await ResumeApi(memberId);
        console.log(res);
        window.scrollTo(0, 0);
        navigate(`/new/${res.data?.resumeId}`);
    };
    return (
        <>
            {location.pathname === '/resume' && length > 0 ? (
                <Wrapper>
                    <Length>총 {length}건</Length>
                    <Link onClick={goNew}>새 이력서 추가</Link>
                </Wrapper>
            ) : (
                <Wrapper>
                    <Length>총 {length}건</Length>
                    <SearchWrapper>
                        <SearchInput placeholder={placeholder} />
                        <Img src={search} onClick={onClick} />
                    </SearchWrapper>
                </Wrapper>
            )}
        </>
    );
};

export default BoardsHeader;

const Wrapper = styled.div`
    width: 59.7rem;
    height: 3.3rem;
    border-bottom: 0.05rem solid var(--light-gray);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Link = styled.a`
    text-decoration: none;
    color: var(--dark-green);
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid var(--dark-green);
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: var(--dark-green);
        color: var(--white);
    }
`;
const SearchInput = styled.input`
    width: 15rem;
    height: 2rem;
    border-radius: 5rem;
    outline: none;
    font-size: 0.8rem;
    box-sizing: border-box;
    padding: 0.6rem 0.75rem 0.55rem;
    border: 1px solid var(--light-gray);
    margin-right: 1.1vw;

    &::placeholder {
        font-size: 0.8rem;
    }
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5rem;
`;

const Length = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
`;
const Img = styled.img`
    cursor: pointer;
`;
