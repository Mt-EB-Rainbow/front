import SiteCard from '../_common/Card/SiteCard';
import PageTitle from '../_common/PageTitle';
import * as S from './Support.style';

const Support = () => {
    return (
        <>
            <S.Wrapper>
                <PageTitle text={'취업 지원 사이트 모음'} />
                {/* @todo map */}
                <S.PageBody>
                    <S.Header>
                        <S.Title>취업 / 교육 / 상담</S.Title>
                    </S.Header>
                    <S.Body>
                        <S.Card>
                            <SiteCard
                                title={'꿈날개'}
                                text={
                                    "직업상담, 직업교육훈련, 새일여성인턴, 취·창업 연계, 경력단절예방, 취업 후 사후관리 등 종합적인 취업지원 서비스를 제공하는 '여성 취업전문 기관'"
                                }
                            />
                        </S.Card>
                        <S.Card>
                            <SiteCard
                                title={'꿈날개'}
                                text={
                                    "직업상담, 직업교육훈련, 새일여성인턴, 취·창업 연계, 경력단절예방, 취업 후 사후관리 등 종합적인 취업지원 서비스를 제공하는 '여성 취업전문 기관'"
                                }
                            />
                        </S.Card>
                        <S.Card>
                            <SiteCard
                                title={'꿈날개'}
                                text={
                                    "직업상담, 직업교육훈련, 새일여성인턴, 취·창업 연계, 경력단절예방, 취업 후 사후관리 등 종합적인 취업지원 서비스를 제공하는 '여성 취업전문 기관'"
                                }
                            />
                        </S.Card>
                        <S.Card>
                            <SiteCard
                                title={'꿈날개'}
                                text={
                                    "직업상담, 직업교육훈련, 새일여성인턴, 취·창업 연계, 경력단절예방, 취업 후 사후관리 등 종합적인 취업지원 서비스를 제공하는 '여성 취업전문 기관'"
                                }
                            />
                        </S.Card>
                        <S.Card>
                            <SiteCard
                                title={'꿈날개'}
                                text={
                                    "직업상담, 직업교육훈련, 새일여성인턴, 취·창업 연계, 경력단절예방, 취업 후 사후관리 등 종합적인 취업지원 서비스를 제공하는 '여성 취업전문 기관'"
                                }
                            />
                        </S.Card>
                        <S.Card>
                            <SiteCard
                                title={'꿈날개'}
                                text={
                                    "직업상담, 직업교육훈련, 새일여성인턴, 취·창업 연계, 경력단절예방, 취업 후 사후관리 등 종합적인 취업지원 서비스를 제공하는 '여성 취업전문 기관'"
                                }
                            />
                        </S.Card>
                    </S.Body>
                </S.PageBody>
                <S.PageBody>
                    <S.Header>
                        <S.Title>보육</S.Title>
                    </S.Header>
                    <S.Body>
                        <S.Card>
                            <SiteCard
                                title={'서울시보육포털서비스'}
                                text={
                                    '언제, 어디서나 어린이집에 대한 정보 검색과 보육 서비스 제공을 위해 인터넷을 통한 실시간 조회 및 예약 등이 가능'
                                }
                            />
                        </S.Card>
                        <S.Card>
                            <SiteCard
                                title={'서울시보육포털서비스'}
                                text={
                                    '언제, 어디서나 어린이집에 대한 정보 검색과 보육 서비스 제공을 위해 인터넷을 통한 실시간 조회 및 예약 등이 가능'
                                }
                            />
                        </S.Card>
                        <S.Card>
                            <SiteCard
                                title={'서울시보육포털서비스'}
                                text={
                                    '언제, 어디서나 어린이집에 대한 정보 검색과 보육 서비스 제공을 위해 인터넷을 통한 실시간 조회 및 예약 등이 가능'
                                }
                            />
                        </S.Card>
                    </S.Body>
                </S.PageBody>
            </S.Wrapper>
        </>
    );
};

export default Support;
