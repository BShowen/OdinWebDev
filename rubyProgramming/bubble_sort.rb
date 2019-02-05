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

    print array
    print "\n"
    return array

end


bubble_sort([9,8,7,6,5,4,3,2,1])
bubble_sort([4,3,78,2,0,2])
