import * as S from './SignupHeader.style';
import PageTitle from '../../_common/PageTitle';
import { Arrow, Check, Lock, User } from '../../_common/Emoji';

const SignupHeader = () => {
    return (
        <>
            <PageTitle text={'회원가입'} />
            <S.BoxWrapper>
                <S.SectionWrapper>
                    <S.Num>01</S.Num>
                    <S.EmojiBox>
                        <S.EmojiWrapper>
                            <Lock />
                        </S.EmojiWrapper>
                        <S.ActiveBox />
                    </S.EmojiBox>
                    <S.Process>개인정보 동의</S.Process>
                </S.SectionWrapper>
                <Arrow />
                <S.SectionWrapper>
                    <S.Num>02</S.Num>
                    <S.EmojiBox>
                        <S.EmojiWrapper>
                            <User />
                        </S.EmojiWrapper>
                        <S.UnActiveBox />
                    </S.EmojiBox>
                    <S.Process>기본 정보 입력</S.Process>
                </S.SectionWrapper>

                <Arrow />
                <S.SectionWrapper>
                    <S.Num>03</S.Num>
                    <S.EmojiBox>
                        <S.EmojiWrapper>
                            <Check />
                        </S.EmojiWrapper>
                        <S.UnActiveBox />
                    </S.EmojiBox>
                    <S.Process>회원가입 완료</S.Process>
                </S.SectionWrapper>
            </S.BoxWrapper>
        </>
    );
};

export default SignupHeader;
