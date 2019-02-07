load "game_space.rb"

$game = GameSpace.new

def make_move()
    if $game.moves == 0
        $game.show_board
        puts " X's go first." 
    elsif $game.last_move == "X"
        puts "It is O's turn: "
    else
        puts "It is X's turn: "
    end

    puts "Type 'top center', 'middle center', 'bottom left' etc mark your choice... :"
    move = gets.chomp.downcase
    
    $game.take_turn(move)
    puts ""

    $game.show_board

end

def play_game
    game_is_over = false
    until game_is_over
        make_move
        game_is_over = $game.is_game_over?
    end
end

play_game