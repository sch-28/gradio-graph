

class TwitterFunctions:
    

    # def getTweet(self, query : str) -> str:
    #     '''Searches for Tweets with the given query and returns one randomly'''
    #     if query is '':
    #         return ''
    #     tweets = api.search_tweets(q=query, count=100)
    #     tweet = self.clean_tweet(tweets[0].text)
    #     return tweet

    # # stolen from previous code ;)
    # def clean_tweet(self, tweet : str):
    #     '''
    #     Utility function to clean tweet text by removing links, special characters
    #     using simple regex statements.
    #     '''
    #     if tweet.startswith("RT @") :
    #         tweet = tweet.replace("RT ", "")
    #     tweet = re.sub("@[A-Za-z0-9_]+","", tweet)
    #     tweet = re.sub("#[A-Za-z0-9_]+","", tweet)
    #     return ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())
    def getTweet(self, query : str) -> str:
        return "test"