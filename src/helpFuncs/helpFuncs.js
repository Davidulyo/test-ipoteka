

export const addCommas = (number, setSum) => {
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); // снова обрамляем запятыми после каждого третьего знака, считая справа
    setSum(parts.join("."))
}

export const removeCommas = (number) => {
    return number.replace(/,/g, '');
}

export const checkNumber = (number) => {
    return number > 10000000 ? false : true;
}



export const getValuesOfFields = () => {
    const fields = document.querySelectorAll('.input-price')
    const fields2 = document.querySelectorAll('.input-list')
    const arrayOfFields = [...fields, ...fields2]

    const values = [];

    for (let i = 0; i < arrayOfFields.length; i++) {
        values.push(arrayOfFields[i].value);
    }

    return values;
}


