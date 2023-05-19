# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def certain_letter(array,letter)
    new_arr = []

    array.each do |word|
        if word.include?(letter)
            new_arr << word
        end
    end
    p new_arr
end

# OUTPUTS
# certain_letter(beverages_array, filter_letter_o)
# Output: ["coffee", "soda water"]
# certain_letter(beverages_array, filter_letter_t)
# Output: ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def alph_states(hash)
    
    p hash.values.flatten.sort
end  

# OUTPUTS
# alph_states(us_states)
# Output:["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
class BikeStuff
    attr_accessor :model, :wheels, :current_speed, :speed, :break_amt
    def initialize(model, wheels = 2)
        @model = model
        @wheels = wheels
        @current_speed = 0
    end
    
    def pedal_faster speed
         @current_speed += speed
    end

    def break break_amt
        @current_speed -= break_amt
        if @current_speed > 0
             @current_speed 
        else
             @current_speed = 0
        end
    end

    def bike_info
       p "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end
end



# OUTPUTS:
# my_bike = BikeStuff.new('Trek')
# my_bike.bike_info
# my_bike.pedal_faster(10)
# my_bike.bike_info
# my_bike.pedal_faster(18)
# my_bike.bike_info
# my_bike.break(5)
# my_bike.bike_info
# my_bike.break(25)
# my_bike.bike_info

# "The Trek bike has 2 wheels and is going 0 mph."
# "The Trek bike has 2 wheels and is going 10 mph."
# "The Trek bike has 2 wheels and is going 28 mph."
# "The Trek bike has 2 wheels and is going 23 mph."
# "The Trek bike has 2 wheels and is going 0 mph."


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


# COMBINED WITH PART A ^^^^^^^^^^^
