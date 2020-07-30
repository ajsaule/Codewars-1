# Complete the solution so that the function will break up camel casing, using a space between words.

# Example
# solution("camelCasing")  ==  "camel Casing"

def solution(string)
  string
    .split("") # break chars
    .map { |char| char == char.upcase ? " " + char : char } # insert whitespace before uppercase chars
    .join("") # reverts array to string
end