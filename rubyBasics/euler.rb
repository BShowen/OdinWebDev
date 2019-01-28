numbers_to_sum = []
result = 0

1000.times do |i|
    i += 1
    if i % 3 == 0 || i % 5 == 0
        numbers_to_sum << i 
    end
end

numbers_to_sum.each {|value| result += value}
puts result

