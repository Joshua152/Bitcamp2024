'''
prefs: {
    bed: int,
    bath: int
}

houses: [{
    addr: string,
    list_price: int,
    bed: int,
    bath: int
},...]

return: list of houses with the following for each one
{
    house...
    affordability_score: int,
    preference_score: int
}
'''
def filter_house_list(prefs, house_list, min_afford, max_afford):
    price_range = 0.2 # price can differ by 20% off preference

    def check_prefs_ok(house):
        price_ok = house["list_price"] <= prefs["list_price"] * (1 + price_range) and \
            house["list_price"] >= prefs["list_price"] * (1 - price_range)
        bed_ok = house["bed"] == prefs["bed"]
        bath_ok = house["bath"] == prefs["bath"]

        return price_ok and bed_ok and bath_ok
    
    def calc_a_score(house):
        
        return 1;

    def calc_p_score(house):
        # p = 1 - (deviation from desired price) - (deviation from bed) - (deviation from bath)
        price_deviation = 1 - abs((house["list_price"] - prefs["list_price"]) / prefs["list_price"])
        bed_deviation = 0.1 * abs(house["bed"] - prefs["bed"])
        bath_deviation = 0.1 * abs(house["bath"] - prefs["bath"])
        return max(0, 1 - price_deviation - bed_deviation - bath_deviation)

    filtered = filter(check_prefs_ok, house_list)  
    for house in filtered:
        house.update({
            "affordability_score": calc_a_score(house),
            "preference_score": calc_p_score(house)
        })

    return filtered

'''
income: annual post tax income
debt: minimum monthly debt
'''
def calc_affordable_price(income, debt):
    # calculate monthly payments
    monthly_income = (income / 12) - debt
    min_monthly_payment = 0.2 * monthly_income
    max_monthly_payment = 0.36 * monthly_income

    '''
    M = how much pay per month
    r = monthly interest rate (yearly / 12) -> 7.5%
    n = total payments they make over the whole mortgage (30 years -> 360) = 12 ( years of mortage)
    house price = P + down payment
    '''
    def calc_home_price(monthly_payment): 
        down_payment = 0.2 * income
        r = 0.075 / 12
        n = 30 * 12

        P = (monthly_payment * (pow(r + 1, n) - 1)) / (r * pow(r + 1, n))
        return P + down_payment

    # calculate affordable price range (min, max) given monthly payments
    return (calc_home_price(min_monthly_payment), calc_home_price(max_monthly_payment))

house_list = [
    {
        "addr": "addr 1",
        "list_price": 1345,
        "bed": 3,
        "bath": 5
    },
    {
        "addr": "addr 2",
        "list_price": 2000,
        "bed": 2,
        "bath": 5
    },
    {
        "addr": "addr 3",
        "list_price": 3843,
        "bed": 1,
        "bath": 20
    }
]

prefs = {
    "list_price": 2000,
    "bed": 2,
    "bath": 5
}

filtered = filter_house_list(prefs, house_list)
for house in filtered:
    print(house)

print(calc_affordable_price(100000, 500))