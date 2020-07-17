const nb_year = (starting_pop, growth_percent, immigration_num, target_pop) => {
  let years_to_target = 0

  let current_pop = starting_pop
  while (current_pop < target_pop) {
    years_to_target += 1
    current_pop = current_pop + (current_pop * (growth_percent / 100)) + immigration_num
  }

  return years_to_target
}