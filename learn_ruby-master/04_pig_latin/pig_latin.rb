#write your code here
def translate(words)
    vowels = ["a", "e", "i", "o", "u"]
    words_to_translate = words.split(" ")
    finished_product = []

    words_to_translate.each { |word| 
        result = ''
        result += word
        
        if (vowels.include? word[0])
            result += "ay"
            finished_product << result
        elsif (vowels.include? word[1])
            if (word[0] == "q" && word[1] == "u")
                result.slice!(0..1)
                result += word.slice!(0..1) + "ay"
                finished_product << result
            else
                result.slice!(0)
                result += word.slice!(0) + "ay"
                finished_product << result
            end
        elsif (vowels.include? word[2])
            if (word[1] == "q" && word[2] == "u")
                result.slice!(0..2)
                result += word.slice!(0..2) + "ay"
                finished_product << result
            else
                snippet = result.slice!(0..1)
                result += snippet + "ay"
                finished_product << result
            end
        else
            snippet = result.slice!(0..2)
            result += snippet + "ay"
            finished_product << result
        end
    }
    
    finished_product.join(" ")
end