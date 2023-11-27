// "YYYY.MM" 형식을 "YYYY-MM-DD" 형식으로 변환
export const convertCustomDateString = dateString => {
    const parts = dateString.split('.');
    if (parts.length === 2 && parts[0].length === 4 && parts[1].length === 2) {
        return `${parts[0]}-${parts[1]}-01`;
    }
    return null; // 형식에 맞지 않으면 null 반환
};

// 주어진 문자열이 유효한 날짜인지 확인하고 ISO 형식으로 변환
export const convertDateToISO = dateString => {
    console.log('date string', dateString);
    const formattedDateString = convertCustomDateString(dateString);
    console.log('formatted date' + formattedDateString);
    if (formattedDateString) {
        const date = new Date(formattedDateString);
        return isNaN(date.getTime()) ? null : date.toISOString();
    }
    return null;
};

// 주어진 배열의 각 객체에 대해 날짜 필드를 변환
export const convertDateFieldsInArray = (items, dateFields) => {
    console.log('items', items);
    return items.map(item => {
        const newItem = { ...item };
        dateFields.forEach(field => {
            if (newItem[field]) {
                newItem[field] = convertDateToISO(newItem[field]);
            }
            console.log(newItem[field]);
        });
        return newItem;
    });
};

// ISO 형식을 "YYYY.MM" 형식으로 변환
export const convertISOToCustomDateString = dateString => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth()는 0에서 시작하므로 1을 더해줍니다.

    return `${year}.${month.toString().padStart(2, '0')}`; // 월이 한 자리 수일 경우 앞에 0을 붙여줍니다.
};

// 주어진 배열의 각 객체에 대해 날짜 필드를 변환
export const convertDateFieldsInArrayToCustom = (items, dateFields) => {
    return items.map(item => {
        const newItem = { ...item };
        dateFields.forEach(field => {
            if (newItem[field]) {
                newItem[field] = convertISOToCustomDateString(newItem[field]);
            }
        });
        return newItem;
    });
};
