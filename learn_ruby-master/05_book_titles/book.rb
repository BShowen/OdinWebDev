class Book

    attr_accessor :title

    def title
        lowercase_words = ['and', 'in', 'of', 'the', 'a', 'an']
        title_words = @title.split(" ")
        finished_title = []

        title_words.each_index { |index| 
            if ( index == 0) 
                finished_title << title_words[index].capitalize
            elsif (lowercase_words.include? title_words[index]) 
                finished_title << title_words[index]
            else
                finished_title << title_words[index].capitalize 
            end
        }

        finished_title.join(" ")
    end
end
