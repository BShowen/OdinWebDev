def caesar_cipher(string, shift)
    result = ''

    # check each string character, if its a letter then increment it, else return the 
    # return the original character
    string.each_char { |char| 
        if char.match?(/[a-zA-Z]/)
            counter = 0
            while counter < shift
                if char == "z"
                    char = "a"
                elsif char == "Z"
                    char = "A"
                else
                    char.next!
                end
                counter += 1
            end
            result += char
        else
            result += char
        end
    }
    
    print result + "\n"
end

caesar_cipher("work with !specials??", 4)