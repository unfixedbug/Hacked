import requests
import json
import pandas as pd

def getApiResponse(hotel_code):
    url = "https://hotelbookings.priceless.com/iwtx/api/v1/hotel-benefits/"+hotel_code
    payload = {}
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9,hi;q=0.8,mr;q=0.7',
        'Authorization': 'Basic TUFQcmljZWxlc3NIb3RlbHM6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Cookie': 'country_code=IN; _ga=GA1.1.990597352.1705481228; user_ip_info=103.226.168.238; _scid=09e7b2e3-ff59-4bb0-8821-d0164b687109; _scid_r=09e7b2e3-ff59-4bb0-8821-d0164b687109; _gcl_au=1.1.1624709563.1705481230; _tt_enable_cookie=1; _ttp=XbaWmsv5McDmGw-8baJnAH41q87; _fbp=fb.1.1705481229827.617283473; _sctr=1%7C1705429800000; ApplicationGatewayAffinityCORS=a32a16c9906d2c799ea6efff5dc60c33; ApplicationGatewayAffinity=a32a16c9906d2c799ea6efff5dc60c33; bin_data={%22isValid%22:true%2C%22brand%22:5%2C%22brandProductCode%22:%22MUS%22%2C%22description%22:%22PREPAID%20MASTERCARD%20UNEMBOSSED%22%2C%22iin%22:%2253376600%22%2C%22bin6Digits%22:%22533766%22%2C%22issuer%22:%22STANDARD%20BANK%20OF%20SOUTH%20AFRICA%2C%20LTD.%22%2C%22isVcc%22:false%2C%22cardType%22:2%2C%22country%22:%22ZA%22%2C%22cardCurrency%22:%22ZAR%22%2C%22checkInDateFrom%22:%222023-04-20T07:24:41.149407%22%2C%22checkInDateTo%22:%222099-04-20T07:24:41.149407%22}; currencies=USD%2CZAR; currency=USD; _ga_EN7W9Z52ZE=GS1.1.1705481228.1.1.1705481399.0.0.0',
        'Pragma': 'no-cache',
        'Referer': 'https://hotelbookings.priceless.com/hotels/results?countryName=United%20Arab%20Emirates&cityName=Dubai&bin=53376660&lang=en-US&dates=2024.02.22-2024.02.23&guests=2&sid=5cc2137d-689a-4d95-bf34-46a4fc6a8e1d-20240117',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    data = response.json()
    with open(f"{hotel_code}.json","w") as f:
       json.dump(data,f)
    descriptions = [item['Description'] for item in data if item['Language']=='EN']
    return descriptions

benefits = pd.read_excel('HotelsBenefits.xlsx')
benefits['Descriptions'] = benefits['Descriptions'].astype(str)

for row in benefits.itertuples():
    hotel_code = row._1
    descriptions = getApiResponse(hotel_code)
    benefits.at[row.Index, 'Descriptions'] = str(descriptions)
    print("Scraped for code"+hotel_code)

print("Done Converting -->")
benefits.to_excel('HotelsBenefits.xlsx', index=False)


