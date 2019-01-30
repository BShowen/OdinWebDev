class Timer
  
  attr_accessor :seconds, :time_string

  def initialize 
    @seconds = 0
  end
  
  def time_string
    
    @time_string = "00:00:00"
    seconds = @seconds % 60
    seconds_placeholder = "00"
    minutes = @seconds/60 % 60
    minutes_placeholder = "00"
    hours = (@seconds/3600).floor
    hours_placeholder = "00"

    if (minutes < 10) 
      minutes_placeholder = "0#{minutes}"
    else 
      minutes_placeholder = "#{minutes}"
    end
    # puts "minutes = #{minutes}"
    
    if (seconds < 10)
      seconds_placeholder = "0#{seconds}"
    else
      seconds_placeholder = "#{seconds}"
    end

    if (hours < 10)
      hours_placeholder = "0#{hours}"
    else
      hours_placeholder = "#{hours}"
    end

    @time_string = "#{hours_placeholder}:#{minutes_placeholder}:#{seconds_placeholder}"
  end
  

end
