import React, { useEffect } from 'react';
import styled from 'styled-components';
import GreenBtn from '../_common/Btn/GreenBtn';
import search from '../../assets/search.svg';
import { useState } from 'react';
const JobModal = React.memo(props => {
    const { isModalOpen, closer, maintext, onClick1, onClick2, data } = props;

    const [text, setText] = useState('');
    console.log(text);

    useEffect(() => {
        document.body.style.cssText = `
              
              top: -${window.scrollY}px;
              overflow-y: scroll;
              width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);
    return (
        <>
            {isModalOpen ? (
                <Container>
                    <Background onClick={closer} />
                    <ModalBlock>
                        <Text>{maintext}</Text>
                        <Wrapper>
                            <Input
                                placeholder='직무이름으로 검색하기'
                                onChange={e => setText(e.target.value)}
                            />

                            <Img src={search} onClick={onClick2} />
                        </Wrapper>
                        <Line />
                        {data.map(el => (
                            <Data>{el}</Data>
                        ))}
                    </ModalBlock>
                </Container>
            ) : null}
        </>
    );
});

export default JobModal;

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`;
const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: modal-bg-show 0.3s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30rem;
    margin-bottom: 2.15rem;
`;
const Input = styled.input`
    width: 27.35rem;
    height: 2.2rem;
    flex-shrink: 0;
    padding: 0.7rem 1.5rem;
    box-sizing: border-box;
    color: black;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 5rem;
    border: 1px solid var(--Light-Gray, #d8d8d8);
    outline: none;
`;

const Img = styled.img`
    cursor: pointer;
`;

const ModalBlock = styled.div`
    box-sizing: border-box;
    position: relative;
    width: calc(100% - 48px);
    background-color: white;
    width: 38.5rem;
    height: 27.3rem;
    flex-shrink: 0;
    border: none;
    padding: 2.8rem 4.5rem;
    flex-shrink: 0;
    overflow-y: auto;
    animation: modal-show 0.3s;
    position: fixed;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -20px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
`;
const Text = styled.div`
    color: #000;
    text-align: center;
    text-align: left;
    font-size: 1.2578rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 1.1rem;
`;

const Line = styled.div`
    width: 30.05015rem;
    border-bottom: 1px solid var(--light-gray);
`;

const Data = styled.div`
    color: #545454;

    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #545454;
    box-sizing: border-box;
    padding: 1rem 2.3rem;
    border-bottom: 1px solid var(--light-gray);
`;