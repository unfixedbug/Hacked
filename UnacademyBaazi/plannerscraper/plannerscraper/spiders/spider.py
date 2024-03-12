import scrapy
import os
from scrapy.http import HtmlResponse
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# class spider(scrapy.Spider):
#     name = 'uspider'
#     start_urls = ['https://unacademy.com/course/comprehensive-course-in-computer-networks/M7HJC525']  # Use the file URI scheme

#     def parse(self, response):
#         # objs=response.xpath('//div[contains(@class,"itemContainer")]').getall()
#         objs=response.xpath("//div//div[@class='itemContainer css-14vmtud-ItemContainer ecq12m810']").getall()
#         print("-----------------------------")
#         print("-----------------------------")
#         print("Length: ",len(objs))
#         for obj in objs:
#             yield {
#                 'Obj':obj
#             }


class spider(scrapy.Spider):
    name = 'uspider'
    start_urls = ['https://unacademy.com/course/comprehensive-course-in-computer-networks/M7HJC525']  # Use the file URI scheme

    def __init__(self):
        self.driver = webdriver.Chrome()  # Or whichever browser you're using

    def parse(self, response):
        self.driver.get(response.url)
        # Wait for the "View More" button to be clickable and click it
        WebDriverWait(self.driver,  10).until(EC.element_to_be_clickable((By.XPATH,'//*[@id="__next"]/div[1]/div/div/h6' ))).click()
        # Wait for the additional content to load
        WebDriverWait(self.driver,10)
        # Pass the page source to Scrapy for parsing
        return HtmlResponse(url=self.driver.current_url, body=self.driver.page_source, encoding='utf-8', request=response.request)

    def parse_additional_content(self, response):
        # bjs=response.xpath("//div//div[@class='itemContainer css-14vmtud-ItemContainer ecq12m810']").getall()
        # print("------------------",len(bjs))
        # yield {'data':bjs}
        # for link in bjs:
        #     yield {'link': link}
        print("--------------------------------------------------------------------")
        print(type(response))
        # for link in response.css('a::attr(href)').getall():
        #     yield {'link': link}
