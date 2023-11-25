import axios from 'axios';
import { XMLParser, XMLValidator } from 'fast-xml-parser';

const https = axios.create();
https.defaults.baseURL = 'https://www.dream.go.kr/';

/* 
    {
        "responseBody" : [
            {
                "applyUrl" : "String",
                "contentsName" : "String",
                "courseName" : "String", 
                "courseSeq" : int,
                "detailUrl" : "String", 
                "fileUrl" : "String",
                "majorCategoryName" : "String",
                "onlineTrainingTime" : "String",
                "trainingGoal" : <html />,
                "trainingSummary" : <html />
            }
        ]
    }
*/
export const TrainingApi = async (authKey, type, startPage, display) => {
    try {
        const res = await https
            .get(
                `dream/dreamApi/v1.do?authKey=${authKey}&type=${type}&startPage=${startPage}&display=${display}`,
                { responseType: 'text' },
            )
            .then(response => {
                // xml to json
                if (XMLValidator.validate(response.data)) {
                    const parser = new XMLParser();
                    let jsonObj = parser.parse(response.data);
                    return jsonObj;
                } else {
                    console.error('Invalid XML data');
                    return null; // 유효하지 않은 XML 데이터 처리
                }
            });
        return res;
    } catch (err) {
        console.log(err);
    }
};
