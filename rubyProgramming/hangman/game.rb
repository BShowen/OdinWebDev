

dictionary = File.read "5desk.txt"
dict = dictionary.split()
approved_words = []

dict.each do |word|
    if word.length >5 && word.length <= 12
        approved_words << word
    end
end

def random_word(list)
    return list[rand(0...list.length)]
end

p random_word(approved_words)