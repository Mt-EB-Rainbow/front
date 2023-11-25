import { SupportByTypeApi } from '../../api/Support';
import SiteCard from '../_common/Card/SiteCard';
import PageTitle from '../_common/PageTitle';
import * as S from './Support.style';
import { useState, useEffect } from 'react';

const Support = () => {
    const [employment, setEmployment] = useState([]);
    const [nurture, setNurture] = useState([]);
    const [regional, setRegional] = useState([]);

    useEffect(() => {
        const fetchSites = async () => {
            try {
                const employmentApi = await SupportByTypeApi('EMPLOYMENT');
                const nurtureApi = await SupportByTypeApi('NURTURE');
                const regionalApi = await SupportByTypeApi('REGIONAL');

                if (employmentApi.siteResponseList) {
                    setEmployment(employmentApi.siteResponseList);
                }

                if (nurtureApi.siteResponseList) {
                    setNurture(nurtureApi.siteResponseList);
                }

                if (regionalApi.siteResponseList) {
                    setRegional(regionalApi.siteResponseList);
                }
            } catch (error) {
                console.error('Error fetching sites:', error);
            }
        };

        fetchSites();
    }, []);

    return (
        <>
            <S.Wrapper>
                <PageTitle text={'취업 지원 사이트 모음'} />
                <S.PageBody>
                    <S.Header>
                        <S.Title>취업 / 교육 / 상담</S.Title>
                    </S.Header>
                    <S.Body>
                        {employment.map((item, index) => (
                            <S.Card key={index}>
                                <SiteCard
                                    title={item.name}
                                    description={item.description}
                                    siteUrl={item.siteUrl}
                                    imageUrl={item.imageUrl}
                                />
                            </S.Card>
                        ))}
                    </S.Body>
                </S.PageBody>
                <S.PageBody>
                    <S.Header>
                        <S.Title>보육</S.Title>
                    </S.Header>
                    <S.Body>
                        {nurture.map((item, index) => (
                            <S.Card key={index}>
                                <SiteCard
                                    title={item.name}
                                    description={item.description}
                                    siteUrl={item.siteUrl}
                                    imageUrl={item.imageUrl}
                                />
                            </S.Card>
                        ))}
                    </S.Body>
                </S.PageBody>
                <S.PageBody>
                    <S.Header>
                        <S.Title>지역별</S.Title>
                    </S.Header>
                    <S.Body>
                        {regional.map((item, index) => (
                            <S.Card key={index}>
                                <SiteCard
                                    title={item.name}
                                    description={item.description}
                                    siteUrl={item.siteUrl}
                                    imageUrl={item.imageUrl}
                                />
                            </S.Card>
                        ))}
                    </S.Body>
                </S.PageBody>
            </S.Wrapper>
        </>
    );
};

export default Support;
