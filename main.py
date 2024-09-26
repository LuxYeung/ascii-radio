def on_button_pressed_a():
    global letter
    letter = "" + letter + "0"
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global sentence
    radio.send_string(sentence)
    basic.clear_screen()
    basic.show_string(sentence)
    sentence = ""
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    if receivedString == "*£!!!£*":
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            """)
        basic.pause(100)
        control.reset()
    else:
        basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global letter
    letter = "" + letter + "1"
input.on_button_pressed(Button.B, on_button_pressed_b)

letter = ""
sentence = ""
sentence = ""
radio.set_group(114)
basic.clear_screen()
letter = ""
enabled = True
# binary decoder

def on_forever():
    global sentence, letter
    if len(letter) == 7:
        if letter == "0000000":
            radio.send_string("*£!!!£*")
            basic.show_leds("""
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                """)
            basic.clear_screen()
            control.reset()
        if letter == "0100000":
            basic.show_string(" ")
            sentence = "" + sentence + " "
            letter = ""
        if letter == "0100001":
            basic.show_string("!")
            sentence = "" + sentence + "!"
            letter = ""
        if letter == "0100010":
            basic.show_string("\"")
            sentence = "" + sentence + "\""
            letter = ""
        if letter == "0100011":
            basic.show_string("#")
            sentence = "" + sentence + "#"
            letter = ""
        if letter == "0100100":
            basic.show_string("$")
            sentence = "" + sentence + "$"
            letter = ""
        if letter == "0100101":
            basic.show_string("%")
            sentence = "" + sentence + "%"
            letter = ""
        if letter == "0100110":
            basic.show_string("&")
            sentence = "" + sentence + "&"
            letter = ""
        if letter == "0100111":
            basic.show_string("'")
            sentence = "" + sentence + "'"
            letter = ""
        if letter == "0101000":
            basic.show_string("(")
            sentence = "" + sentence + "("
            letter = ""
        if letter == "0101001":
            basic.show_string(")")
            sentence = "" + sentence + ")"
            letter = ""
        if letter == "0101010":
            basic.show_string("*")
            sentence = "" + sentence + "*"
            letter = ""
        if letter == "0101011":
            basic.show_string("+")
            sentence = "" + sentence + "+"
            letter = ""
        if letter == "0101100":
            basic.show_string(",")
            sentence = "" + sentence + ","
            letter = ""
        if letter == "0101101":
            basic.show_string("-")
            sentence = "" + sentence + "-"
            letter = ""
        if letter == "0101110":
            basic.show_string(".")
            sentence = "" + sentence + "."
            letter = ""
        if letter == "0101111":
            basic.show_string("/")
            sentence = "" + sentence + "/"
            letter = ""
        if letter == "0110000":
            basic.show_string("0")
            sentence = "" + sentence + "0"
            letter = ""
        if letter == "0110001":
            basic.show_string("1")
            sentence = "" + sentence + "1"
            letter = ""
        if letter == "0110010":
            basic.show_string("2")
            sentence = "" + sentence + "2"
            letter = ""
        if letter == "0110011":
            basic.show_string("3")
            sentence = "" + sentence + "3"
            letter = ""
        if letter == "0110100":
            basic.show_string("4")
            sentence = "" + sentence + "4"
            letter = ""
        if letter == "0110101":
            basic.show_string("5")
            sentence = "" + sentence + "5"
            letter = ""
        if letter == "0110110":
            basic.show_string("6")
            sentence = "" + sentence + "6"
            letter = ""
        if letter == "0110111":
            basic.show_string("7")
            sentence = "" + sentence + "7"
            letter = ""
        if letter == "0111000":
            basic.show_string("8")
            sentence = "" + sentence + "8"
            letter = ""
        if letter == "0111001":
            basic.show_string("9")
            sentence = "" + sentence + "9"
            letter = ""
        if letter == "0111010":
            basic.show_string(":")
            sentence = "" + sentence + ":"
            letter = ""
        if letter == "0111011":
            basic.show_string(";")
            sentence = "" + sentence + ";"
            letter = ""
        if letter == "0111100":
            basic.show_string("<")
            sentence = "" + sentence + "<"
            letter = ""
        if letter == "0111101":
            basic.show_string("=")
            sentence = "" + sentence + "="
            letter = ""
        if letter == "0111110":
            basic.show_string(">")
            sentence = "" + sentence + ">"
            letter = ""
        if letter == "0111111":
            basic.show_string("?")
            sentence = "" + sentence + "?"
            letter = ""
        if letter == "0100000":
            basic.show_string("@")
            sentence = "" + sentence + "@"
            letter = ""
        if letter == "1000001":
            basic.show_string("A")
            sentence = "" + sentence + "A"
            letter = ""
        if letter == "1000010":
            basic.show_string("B")
            sentence = "" + sentence + "B"
            letter = ""
        if letter == "1000011":
            basic.show_string("C")
            sentence = "" + sentence + "C"
            letter = ""
        if letter == "1000100":
            basic.show_string("D")
            sentence = "" + sentence + "D"
            letter = ""
        if letter == "1000101":
            basic.show_string("E")
            sentence = "" + sentence + "E"
            letter = ""
        if letter == "1000110":
            basic.show_string("F")
            sentence = "" + sentence + "F"
            letter = ""
        if letter == "1000111":
            basic.show_string("G")
            sentence = "" + sentence + "G"
            letter = ""
        if letter == "1001000":
            basic.show_string("H")
            sentence = "" + sentence + "H"
            letter = ""
        if letter == "1001001":
            basic.show_string("I")
            sentence = "" + sentence + "I"
            letter = ""
        if letter == "1001010":
            basic.show_string("J")
            sentence = "" + sentence + "J"
            letter = ""
        if letter == "1001011":
            basic.show_string("K")
            sentence = "" + sentence + "K"
            letter = ""
        if letter == "1001100":
            basic.show_string("L")
            sentence = "" + sentence + "L"
            letter = ""
        if letter == "1001101":
            basic.show_string("M")
            sentence = "" + sentence + "M"
            letter = ""
        if letter == "1001110":
            basic.show_string("N")
            sentence = "" + sentence + "N"
            letter = ""
        if letter == "1001111":
            basic.show_string("O")
            sentence = "" + sentence + "O"
            letter = ""
        if letter == "1010000":
            basic.show_string("P")
            sentence = "" + sentence + "P"
            letter = ""
        if letter == "1010001":
            basic.show_string("Q")
            sentence = "" + sentence + "Q"
            letter = ""
        if letter == "1010010":
            basic.show_string("R")
            sentence = "" + sentence + "R"
            letter = ""
        if letter == "1010011":
            basic.show_string("S")
            sentence = "" + sentence + "S"
            letter = ""
        if letter == "1010100":
            basic.show_string("T")
            sentence = "" + sentence + "T"
            letter = ""
        if letter == "1010101":
            basic.show_string("U")
            sentence = "" + sentence + "U"
            letter = ""
        if letter == "1010110":
            basic.show_string("V")
            sentence = "" + sentence + "V"
            letter = ""
        if letter == "1010111":
            basic.show_string("W")
            sentence = "" + sentence + "W"
            letter = ""
        if letter == "1011000":
            basic.show_string("X")
            sentence = "" + sentence + "X"
            letter = ""
        if letter == "1011001":
            basic.show_string("Y")
            sentence = "" + sentence + "Y"
            letter = ""
        if letter == "1011010":
            basic.show_string("Z")
            sentence = "" + sentence + "Z"
            letter = ""
        if letter == "1011011":
            basic.show_string("[")
            sentence = "" + sentence + "["
            letter = ""
        if letter == "1011100":
            basic.show_string("\\")
            sentence = "" + sentence + "\\"
            letter = ""
        if letter == "1011101":
            basic.show_string("]")
            sentence = "" + sentence + "]"
            letter = ""
        if letter == "1011110":
            basic.show_string("^")
            sentence = "" + sentence + "^"
            letter = ""
        if letter == "1011111":
            basic.show_string("_")
            sentence = "" + sentence + "_"
            letter = ""
        if letter == "1100000":
            basic.show_string("`")
            sentence = "" + sentence + "`"
            letter = ""
        if letter == "1100001":
            basic.show_string("a")
            sentence = "" + sentence + "a"
            letter = ""
        if letter == "1100010":
            basic.show_string("b")
            sentence = "" + sentence + "b"
            letter = ""
        if letter == "1100011":
            basic.show_string("c")
            sentence = "" + sentence + "c"
            letter = ""
        if letter == "1100100":
            basic.show_string("d")
            sentence = "" + sentence + "d"
            letter = ""
        if letter == "1100101":
            basic.show_string("e")
            sentence = "" + sentence + "e"
            letter = ""
        if letter == "1100110":
            basic.show_string("f")
            sentence = "" + sentence + "f"
            letter = ""
        if letter == "1100111":
            basic.show_string("g")
            sentence = "" + sentence + "g"
            letter = ""
        if letter == "1101000":
            basic.show_string("h")
            sentence = "" + sentence + "h"
            letter = ""
        if letter == "1101001":
            basic.show_string("i")
            sentence = "" + sentence + "i"
            letter = ""
        if letter == "1101010":
            basic.show_string("j")
            sentence = "" + sentence + "j"
            letter = ""
        if letter == "1101011":
            basic.show_string("k")
            sentence = "" + sentence + "k"
            letter = ""
        if letter == "1101100":
            basic.show_string("l")
            sentence = "" + sentence + "l"
            letter = ""
        if letter == "1101101":
            basic.show_string("m")
            sentence = "" + sentence + "m"
            letter = ""
        if letter == "1101110":
            basic.show_string("n")
            sentence = "" + sentence + "n"
            letter = ""
        if letter == "1101111":
            basic.show_string("o")
            sentence = "" + sentence + "o"
            letter = ""
        if letter == "1110000":
            basic.show_string("p")
            sentence = "" + sentence + "p"
            letter = ""
        if letter == "1110001":
            basic.show_string("q")
            sentence = "" + sentence + "q"
            letter = ""
        if letter == "1110010":
            basic.show_string("r")
            sentence = "" + sentence + "r"
            letter = ""
        if letter == "1110011":
            basic.show_string("s")
            sentence = "" + sentence + "s"
            letter = ""
        if letter == "1110100":
            basic.show_string("t")
            sentence = "" + sentence + "t"
            letter = ""
        if letter == "1110101":
            basic.show_string("u")
            sentence = "" + sentence + "u"
            letter = ""
        if letter == "1110110":
            basic.show_string("v")
            sentence = "" + sentence + "v"
            letter = ""
        if letter == "1110111":
            basic.show_string("w")
            sentence = "" + sentence + "w"
            letter = ""
        if letter == "1111000":
            basic.show_string("x")
            sentence = "" + sentence + "x"
            letter = ""
        if letter == "1111001":
            basic.show_string("y")
            sentence = "" + sentence + "y"
            letter = ""
        if letter == "1111010":
            basic.show_string("z")
            sentence = "" + sentence + "z"
            letter = ""
        if letter == "1111011":
            basic.show_string("{")
            sentence = "" + sentence + "}"
            letter = ""
        if letter == "11110100":
            basic.show_string("|")
            sentence = "" + sentence + "|"
            letter = ""
        if letter == "11110101":
            basic.show_string("}")
            sentence = "" + sentence + "}"
            letter = ""
        if letter == "11110110":
            basic.show_string("~")
            sentence = "" + sentence + "~"
            letter = ""
    elif len(letter) > 0:
        basic.show_number(len(letter))
basic.forever(on_forever)
