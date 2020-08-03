# Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

# Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

# Examples:

# // must return 2
# cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
# // must return 0
# cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

def cakes(recipe, available)
  # take available, divide by recipe, and store result in an array.
  # sort array, take the first value
  cakes_bakeable = nil

  recipe.each do |ingredient, quantity|
    return 0 if available[ingredient].nil?
    
    max_cakes = available[ingredient] / quantity

    if cakes_bakeable.nil?
      cakes_bakeable = max_cakes
    elsif max_cakes < cakes_bakeable
      cakes_bakeable = max_cakes
    end

  end

  cakes_bakeable
end

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})