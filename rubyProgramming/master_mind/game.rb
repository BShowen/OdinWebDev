class Game

    attr_accessor(:code, :guess)

    def initialize 
        @code = generate_code
        @guess = []
    end

    def generate_code
        code = []
        element = 0
        while element < 4 do
            code[element] = rand(6) + 1
            element += 1
        end
        code
    end

    def get_players_guess
        puts "input your guess. It must be 4 integers long, between 1 and 6."
        guess = gets.chomp
        guess.each_char { |item|
            @guess << item.to_i
        }
    end

    def check_guess_against_code
        for num in @guess
            if @code.include? num
                p true
            else
                p false
            end
        end
    end
end

game = Game.new
p game.code
game.get_players_guess
game.check_guess_against_code
