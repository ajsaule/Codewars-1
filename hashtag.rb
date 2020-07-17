# The marketing team is spending way too much time typing in hashtags.
# Let's help them with our own Hashtag Generator!

# Here's the deal:

# It must start with a hashtag (#).
# All words must have their first letter capitalized.
# If the final result is longer than 140 chars it must return false.
# If the input or the result is an empty string it must return false.
# Examples
# " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
# "    Hello     World   "                  =>  "#HelloWorld"
# ""                                        =>  false

require "pry"

def generateHashtag(str)
  words = str.split(" ")
  return false unless words[0]
  
  hash_str = []
  words.each { |word| hash_str << word.capitalize }

  hashtag = "#" + hash_str.join("")

  hashtag.length > 140 ? false : hashtag

end

binding.pry