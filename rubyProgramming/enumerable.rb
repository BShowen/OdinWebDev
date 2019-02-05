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
    
    def my_each_with_index
        index = 0
        while index < self.length
            element = self[index]
            yield(element, index)
            index += 1
        end
        self
    end
end

given_array = %w[here it is]

# given_array.my_each { |x| print x += " now", "--" }
# given_array.each { |x| puts x += " now", "--" }

p given_array.my_each_with_index { |x, i| print "#{x} is element #{i}"}
p given_array.each_with_index { |x, i| print "#{x} is element #{i}"}