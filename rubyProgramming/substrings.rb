dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(phrase, list)
    phrase.downcase!
    word_array = phrase.split(" ")
    result = Hash.new(0)

    word_array.each { |word| 
    
        list.each { |element|
            if (word.include?(element))
                result[element] += 1
            else
                # puts "doesn't"
            end
            
        }
    }

    print result
    print "\n"
    return result
end


substrings("below", dictionary)
substrings("Howdy partner, sit down! How's it going?", dictionary)
