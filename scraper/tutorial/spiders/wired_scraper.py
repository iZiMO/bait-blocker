# pip install scrapy
# scrapy crawl "news" -o wired.json

import re
import scrapy

class BaitScraper(scrapy.Spider):

	# These are on every page in the 'Popular' section
	black_list = [
		"HP Has Added DRM",
		"We Might Have Gotten a Little Carried Away With",
		"The Eccentric Autocrat Who Spent Billions",
		"Palmer Luckey Is the Worst",
		"Cantina Talk",
		"Charlotte Exposes a Critical Flaw",
		"Scientists Discover a Jewel at the Heart",
		"Most Elaborate Corn Maze Is Made"
		]

	name = "news"
	start_urls = [
		"https://www.wired.com/category/transportation/page/3/",
		"https://www.wired.com/category/transportation/page/4/",
		"https://www.wired.com/category/transportation/page/5/",
		"https://www.wired.com/category/transportation/page/6/",
		"https://www.wired.com/category/transportation/page/7/",
		"https://www.wired.com/category/transportation/page/8/",
		"https://www.wired.com/category/transportation/page/9/",
		"https://www.wired.com/category/design/page/1/",
		"https://www.wired.com/category/design/page/2/",
		"https://www.wired.com/category/design/page/3/",
		"https://www.wired.com/category/design/page/4/",
		"https://www.wired.com/category/design/page/5/",
		"https://www.wired.com/category/design/page/6/",
		"https://www.wired.com/category/design/page/7/",
		"https://www.wired.com/category/design/page/8/",
		"https://www.wired.com/category/science/page/1",
		"https://www.wired.com/category/science/page/2",
		"https://www.wired.com/category/science/page/3",
		"https://www.wired.com/category/science/page/4",
		"https://www.wired.com/category/science/page/5",
		"https://www.wired.com/category/science/page/6",
		"https://www.wired.com/category/science/page/7",
		"https://www.wired.com/category/science/page/8",
		"https://www.wired.com/category/science/page/9",
		"https://www.wired.com/category/business/page/1",
		"https://www.wired.com/category/business/page/2",
		"https://www.wired.com/category/business/page/3",
		"https://www.wired.com/category/business/page/4",
		"https://www.wired.com/category/business/page/5",
		"https://www.wired.com/category/business/page/6",
		"https://www.wired.com/category/business/page/7",
		"https://www.wired.com/category/business/page/8",
		"https://www.wired.com/category/business/page/9",
		]

	def parse(self, response):
		for title in response.css('[class^="title"]'):
			title_text = title.css('::text').extract_first()
			ignore = False
			for item in BaitScraper.black_list:
				if item in title_text:
					ignore = True

			if not ignore:
				yield {
					'title': title_text
				}