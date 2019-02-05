module Enumerable
    def my_each
        index = 0
        while index < self.length
            element = self[index]
            yield(element)
            index += 1
        end
        self
    end
    
end

given_array = %w[here it is]
# p given_array.each
p given_array.my_each { |x| puts x += " now" }
# p given_array.each { |x| puts x += " now" }