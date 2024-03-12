import json
import pandas as pd
import ast
benefits = pd.read_excel('HotelsBenefits.xlsx')
benefits['Descriptions'] = benefits['Descriptions'].astype(str)


for row in benefits.itertuples():
    descriptions = ast.literal_eval(row.Descriptions)
    descriptions_set = set(descriptions)
    descriptions_str = ', '.join(descriptions_set)
    print(descriptions_str)
    benefits.at[row.Index, 'Descriptions'] = descriptions_str
    # break
print("completed")
benefits.to_excel('HotelsBenefitsWithDescriptions.xlsx', index=False)
