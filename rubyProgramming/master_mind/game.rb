class Game

    attr_accessor(:code)

    def initialize 

        @code = generate_code

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

end

game = Game.new
p game.code
