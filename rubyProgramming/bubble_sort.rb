def bubble_sort(array)
    finished = false

    array.length.times { 
        array.each_index { |i|
            if i == 0
                # skip first array value
            elsif array[i-1] > array[i]
                array[i-1], array[i] = array[i], array[i-1]
            end
        }
    }

    return array

end

def bubble_sort_by(array)
    
    array.length.times { 
        array.each_index { |i|
            if i == 0
                # skip first array value
            else
                block = yield(array[i-1], array[i])
                # puts "block value #{block}"
                if block > 0
                    array[i-1], array[i] = array[i], array[i-1]
                end
            end
        }
    }

    return array
end

p bubble_sort([9,8,7,6,5,4,3,2,1]) 
p bubble_sort_by(["hi","hello","hey"]) { |left, right| left.length - right.length }
