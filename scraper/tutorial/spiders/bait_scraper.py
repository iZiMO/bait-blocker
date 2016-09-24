import scrapy

class BaitScraper(scrapy.Spider):
	max_titles = 500
	titles_fetched = 0
	url = "http://linkbaitgenerator.com/marketing/index.php"

	name = "bait scraper"
	start_urls = [url]

	def parse(self, response):
		yield {
			'title': response.xpath('//div[@class="7u"]/h2/text()').extract_first()
		}

		BaitScraper.titles_fetched += 1
		if BaitScraper.titles_fetched < BaitScraper.max_titles:
			yield scrapy.Request(BaitScraper.url, callback=self.parse, dont_filter=True)