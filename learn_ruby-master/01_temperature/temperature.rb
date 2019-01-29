#write your code here

def ftoc(fahrenheit)
    celsius = (fahrenheit-32) * 5/9
    celsius
end

def ctof(celsius)
    fahrenheit = ((celsius * 1.8) + 32).round(1)
    puts fahrenheit
    fahrenheit
end