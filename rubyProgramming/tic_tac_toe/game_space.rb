class GameSpace

    attr_accessor(:top_row, :middle_row, :bottom_row, :moves, :last_move, :winner)

    def initialize
        @top_row = "   _|_|_   "
        @middle_row = "   _|_|_   "
        @bottom_row = "    | |    "
        @moves = 0
        @last_move = ""
        @winner = ""
    end

    def show_board
        board_array = [@top_row, @middle_row, @bottom_row]
        board_array.each { |row| p row }
        puts ''
    end

    def take_turn(position)
        character = "default value for first run"
        waiting_for_correct_answer = true

        if @last_move == "" || @last_move == "O"
            character = "X"
            @last_move = "X"
        else
            character = "O"
            @last_move = "O"
        end

        while waiting_for_correct_answer
            case position
            when "top left"
                @top_row[3] = character
                waiting_for_correct_answer = false
            when "top center"
                @top_row[5] = character
                waiting_for_correct_answer = false
            when "top right"
                @top_row[7] = character
                waiting_for_correct_answer = false
            when "middle left"
                @middle_row[3] = character
                waiting_for_correct_answer = false
            when "middle center"
                @middle_row[5] = character
                waiting_for_correct_answer = false
            when "middle right"
                @middle_row[7] = character
                waiting_for_correct_answer = false
            when "bottom left"
                @bottom_row[3] = character
                waiting_for_correct_answer = false
            when "bottom center"
                @bottom_row[5] = character
                waiting_for_correct_answer = false
            when "bottom right"
                @bottom_row[7] = character
                waiting_for_correct_answer = false
            else
                puts "error, invalid move"
                puts " Examples: 'top left', 'top center', 'top right'\n
                    'middle left' middle center' 'middle right' \n
                    'bottom left' bottom center' bottom right'"
                puts "Please choose again: "
                position = gets.chomp.downcase
            end
        end
        @moves += 1
    end

    def is_game_over?
        x = "X"
        o = "O"
        if (@top_row[3] == x && @top_row[5] == x && @top_row[7] = x) ||
            (@top_row[3] == x && @middle_row[5] == x && @bottom_row[7] == x) ||
            (@top_row[3] == x && @middle_row[3] == x && @bottom_row[3] == x) ||
            (@top_row[5] == x && @middle_row[5] == x && @bottom_row[5] == x) ||
            (@middle_row[3] == x && @middle_row[5] == x && @middle_row[7] == x) ||
            (@bottom_row[3] == x && @bottom_row[5] == x && @bottom_row[7] == x) ||
            (@top_row[7] == x && @middle_row[7] == x && @bottom_row[7] == x) ||
            (@top_row[7] == x && @middle_row[5] == x && @bottom_row[3] == x)

            puts "winner is X !!"
            @winner = "X"
            return true
        elsif (@top_row[3] == o && @top_row[5] == o && @top_row[7] = o) ||
            (@top_row[3] == o && @middle_row[5] == o && @bottom_row[7] == o) ||
            (@top_row[3] == o && @middle_row[3] == o && @bottom_row[3] == o) ||
            (@top_row[5] == o && @middle_row[5] == o && @bottom_row[5] == o) ||
            (@middle_row[3] == o && @middle_row[5] == o && @middle_row[7] == o) ||
            (@bottom_row[3] == o && @bottom_row[5] == o && @bottom_row[7] == o) ||
            (@top_row[7] == o && @middle_row[7] == o && @bottom_row[7] == o) ||
            (@top_row[7] == o && @middle_row[5] == o && @bottom_row[3] == o)

            puts "winner is O !!"
            @winner = "O"
            return true
        elsif @moves >= 9 
            puts "game is a draw!!"
            return true
        else 
            return false
        end
    end

end
