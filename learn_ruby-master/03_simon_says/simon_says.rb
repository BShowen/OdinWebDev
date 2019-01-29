#write your code here
def echo(input)
    input
end

def shout(input)
    input.upcase
end

def repeat(input, repeats=2)
    result = ""
    result += input
    (repeats-1).times do
        result.prepend(input + " ")
    end
    
    result
end