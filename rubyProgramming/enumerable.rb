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

    def my_select
        result = Array.new
        index = 0
        while index < self.length
            element = self[index]
            result << element if yield(element) 
            index += 1
        end
        result
    end

    def my_all?
        index = 0
        while index < self.length
            element = self[index]
            return false if !yield(element) 
            index += 1
        end
        true
    end

    def my_any?
        index = 0
        while index < self.length
            element = self[index]
            if yield(element)
                return true
            end
            index += 1
        end
        false
    end

    def my_none?
        index = 0
        while index < self.length
            element = self[index]
            if yield(element)
                return false
            end
            index += 1
        end
        true
    end

    def my_count(matches = nil)
        count = 0
        if block_given?
            self.my_each { |x|
                count += 1 if yield(x)
            }
            return count
        end
        if matches
            self.my_each { |x| count += 1 if x == matches}
        else
            self.my_each { |x| count += 1 }
        end
        count
    end

    def my_map
        list = self.to_a
        result = Array.new
        list.my_each { |element| 
            result << yield(element)
        }
        result
    end

    def my_inject
        list = self.to_a
        result = 0
        list.my_each { |n| 
            result = yield(result, n)
        }
        result
    end

    
end

def multiply_els(arg)
    arg.my_inject {|sum, n| sum * n}
end

# %w[here it is].my_each { |x| print x += " now", "--" }
# %w[here it is].each { |x| puts x += " now", "--" }

# p %w[here it is].my_each_with_index { |x, i| print "#{x} is element #{i}"}
# p %w[here it is].each_with_index { |x, i| print "#{x} is element #{i}"}

# p [1,2,3,4,5].my_select { |x| x.even? }
# p [1,2,3,4,5].select { |x| x.even? }

# p %w[at bear cat].my_all? { |word| word.length >= 3 }
# p %w[at bear cat].all? { |word| word.length >= 3 }

# p %w[ant bear cat].my_any? { |word| word.length >= 4 }
# p %w[ant bear cat].any? { |word| word.length >= 4 }

# p %w{ant bear cat}.my_none? { |word| word.length == 5 }
# p %w{ant bear cat}.none? { |word| word.length == 5 }

# p [1,2,3,4,2,5,6,2].my_count
# p [1,2,3,4,2,5,6,2].my_count(2)
# p [1,2,3,4,2,5,6,2].my_count { |x| x%2==0 }

# p (1..4).my_map { |i| i*i }
# p (1..4).my_map { "cat"  }

p (5..10).my_inject {|sum, i| sum + i }
# p %w{ cat sheep bear }.inject { |memo, word|
#     memo.length > word.length ? memo : word
# }

# p multiply_els([2,4,5])
