import scrapy
from scrapy_selenium import SeleniumRequest

class MySpider(scrapy.Spider):
    name = 'myspider'
    start_urls = ['https://unacademy.com/course/comprehensive-course-in-computer-networks/M7HJC525']  # Use the file URI scheme


    def start_requests(self):
        for url in self.start_urls:
            yield SeleniumRequest(url=url, callback=self.parse_with_selenium)

    def parse_with_selenium(self, response):
        # Use Selenium to click the "View More" button
        button = response.xpath('//*[@id="__next"]/div[1]/div/div/h6').click()
        # Wait for the new content to load
        response.wait(10)  # Wait for  10 seconds
        # Now pass the page source to Scrapy for parsing
        yield scrapy.Request(response.url, callback=self.parse_with_scrapy)

    def parse_with_scrapy(self, response):
        # Extract the links or other data from the additional content
        for link in response.css("//div//div[@class='itemContainer css-14vmtud-ItemContainer ecq12m810']").getall():
            yield {'link': link}
