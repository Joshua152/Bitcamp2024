import { getProfileInfo } from "./firebase";

const serverUrl = "localhost:5000";

const getHouses = async (user, zipcode, bed, bath) => {
    const userData = await getIncomeDebt(user);
    
    return [
        {
            "attomId": 1,
            "lotsize": 1500,
            "address": "123 North St",
            "bathstotal": 3,
            "beds": 4,
            "roomsTotal": 6,
            "listingPrice": 400000,
            "a_score": 0.8,
            "p_score": 0.9
        },
        {
            "attomId": 2,
            "lotsize": 1100,
            "address": "1600 Pennsylvania Ave",
            "bathstotal": 9,
            "beds": 6,
            "roomsTotal": 20,
            "listingPrice": 9990000,
            "a_score": 0.4,
            "p_score": 0.96
        },
        {
            "attomId": 99,
            "lotsize": 100,
            "address": "420 Partridgeberry Ln.",
            "bathstotal": 4,
            "beds": 5,
            "roomsTotal": 10,
            "listingPrice": 4,
            "a_score": 0.9,
            "p_score": 0.6
        },
        {
            "attomId": 9,
            "lotsize": 1230,
            "address": "400 Partridgeberry Ln.",
            "bathstotal": 3,
            "beds": 2,
            "roomsTotal": 10,
            "listingPrice": 400,
            "a_score": 0.95,
            "p_score": 0.65
        }
    ]
    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "income": userData.income,
            "debt": userData.monthlyDebt,
            "zipcode": zipcode,
            "preferences": {
                "bed": bed,
                "bath": bath
            }
        })
    });
    const data = await res.json()

    return data;
}

const getIncomeDebt = async user => {
    const res = await getProfileInfo(user);
    return res;
}

export { getHouses }