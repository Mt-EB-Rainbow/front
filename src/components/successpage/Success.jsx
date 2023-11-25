import { useNavigate, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { S } from './Success.style';
import { GetSuccessByID } from '../../api/success';

const Success = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [success, setSuccess] = useState({});
    const GetSuccess = async id => {
        const res = await GetSuccessByID(id);
        console.log(res);
        setSuccess(res);
        //setIsLoading(false);
    };
    useEffect(() => {
        GetSuccess(id);
    }, []);

    return (
        <S.Wrapper>
            <S.TitleBox>
                <S.Category>성공 사례</S.Category>
                <S.Title>{success.title}</S.Title>
                <div style={{ display: 'flex' }}>
                    <S.SubInfo>{success.name}</S.SubInfo>
                    <S.SubInfo>읽기 3분 소요</S.SubInfo>
                    <S.SubInfo>
                        출처:{' '}
                        <a href={success.sourceUrl}>{success.sourceUrl}</a>
                    </S.SubInfo>
                </div>
            </S.TitleBox>
            <S.TextBox>
                <S.Text>{success.content1}</S.Text>
            </S.TextBox>
            <S.Image src={success.imageUrl} />
            <S.TextBox>
                <S.Text>{success.content2}</S.Text>
            </S.TextBox>
            <S.GreenBtn onClick={() => navigate('/')}>메인 화면으로</S.GreenBtn>
        </S.Wrapper>
    );
};

export default Success;
