def stock_picker(prices)
    max_array = prices.sort { |a, b| b <=> a }
    min_array = prices.sort
    max_gain = []
    temp_max_gain = 0

    # compare the nth value to nth+1,2,3,4 etc. recording the potential profit in a temp variable
    # if a new pair has a better profit, replace the temp variable with the new 
    i = 0
    while i < prices.length
        buy_day = prices[i]
        x = 1
        while x < prices.length
            sell_day = prices[x]
            profit = sell_day - buy_day
            if profit > temp_max_gain && i < x
                temp_max_gain = profit
                max_gain = [buy_day, sell_day]
            end
            x += 1
        end
        i += 1
    end
    
    print max_gain
    print "\n"
    return max_gain
    
end


stock_picker([17,3,6,9,15,8,6,1,10])
# => [1,4]  # for a profit of $15 - $3 == $12