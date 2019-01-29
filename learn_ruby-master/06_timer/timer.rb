class Timer
  
  attr_accessor :seconds, :time_string

  def initialize 
    @seconds = 0
  end
  
  def time_string
    if (@seconds < 10)
      @time_string = "00:00:0#{@seconds}"
    else
      @time_string = "00:00:#{@seconds}"
    end
  end
  

end
