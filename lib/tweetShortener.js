'use strict';


      var replacements = {
      "hello": "hi",
      "to": "2",
      "two": "2",
      "too": "2",
      "for": "4",
      "For": "4",
      "four": "4",
      "be": "b",
      "you": "u",
      "at": "@",
      "and": "&"
    };

var tweetShortener = {

  wordSubstituter: function(tweet){

    return tweet.replace(/\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi, function(word){
      
      return replacements[word];
    });

    // iterate through the tweet (first, turn string into an array)
    // for each word in the tweet, check to see if it is a key in the replacements hash
    // if it is, replace that word with its value from replacements hash
    // then, turn it back into a string and return it. 
                    // array.collect do |word|
                    //   if replacements.keys.include?(word)
                    //     word = replacements[word]
                    //   else
                    //     word
                    //   end
  //   tweet.replace('hello', 'hi').replace('to', '2').replace('two', '2').replace('too','2')
  //   .replace('for', '4').replace('four', '4').replace('be','b').replace('you','u').replace('at','@')
  //   .replace('and','&');
  },
  bulkShortener: function(tweets){
   return tweets.map(function(tweet){

      return tweet.replace(/\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi, 
        function(word){

      return replacements[word];
    });
    });

  },
  selectiveShortener: function(tweet){
    if(tweet.length >= 140){
      return tweetShortener.wordSubstituter(tweet);
    }
    else if(tweet.length < 140){
      return tweet;
    }
  },
  shortenedTruncator: function(shortTweet){
    if (shortTweet.length < 140){
      return shortTweet;
    }
    else if(shortTweet.length >= 140){
       if(tweetShortener.wordSubstituter(shortTweet).length < 140){
        return tweetShortener.wordSubstituter(shortTweet);
       } 
       else if (tweetShortener.wordSubstituter(shortTweet).length > 140){
        return tweetShortener.wordSubstituter(shortTweet).substr(0,137)+"...";
       }
    }
  },
};

