def caesar_cipher(string, shift)
    encoded = ""
    string.each_char { |letter| 
        if letter.match(/[a-z]/)
            puts letter
        end 
    }
end

caesar_cipher("stop", 4)