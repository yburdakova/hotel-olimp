//getting formatted Date for json request
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); 
const day = String(today.getDate()).padStart(2, '0'); 
const formattedDate = '${year}-${month}-${day}';

export default async function handler({req, res, formattedDate}: any) {
    try {
        console.log(formattedDate)
        const response = await fetch(`https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/en/json/?date=${formattedDate}`);
        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Не удалось получить данные' });
    }
}