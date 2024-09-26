input.onButtonPressed(Button.A, function () {
    letter = "" + letter + "0"
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(sentence)
    basic.clearScreen()
    basic.showString(sentence)
    sentence = ""
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "*£!!!£*") {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(100)
        control.reset()
    } else {
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    letter = "" + letter + "1"
})
let letter = ""
let sentence = ""
sentence = ""
radio.setGroup(114)
basic.clearScreen()
letter = ""
let enabled = true
// binary decoder
basic.forever(function () {
    if (letter.length == 7) {
        if (letter == "0000000") {
            radio.sendString("*£!!!£*")
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.clearScreen()
            control.reset()
        }
        if (letter == "0100000") {
            basic.showString(" ")
            sentence = "" + sentence + " "
            letter = ""
        }
        if (letter == "0100001") {
            basic.showString("!")
            sentence = "" + sentence + "!"
            letter = ""
        }
        if (letter == "0100010") {
            basic.showString("\"")
            sentence = "" + sentence + "\""
            letter = ""
        }
        if (letter == "0100011") {
            basic.showString("#")
            sentence = "" + sentence + "#"
            letter = ""
        }
        if (letter == "0100100") {
            basic.showString("$")
            sentence = "" + sentence + "$"
            letter = ""
        }
        if (letter == "0100101") {
            basic.showString("%")
            sentence = "" + sentence + "%"
            letter = ""
        }
        if (letter == "0100110") {
            basic.showString("&")
            sentence = "" + sentence + "&"
            letter = ""
        }
        if (letter == "0100111") {
            basic.showString("'")
            sentence = "" + sentence + "'"
            letter = ""
        }
        if (letter == "0101000") {
            basic.showString("(")
            sentence = "" + sentence + "("
            letter = ""
        }
        if (letter == "0101001") {
            basic.showString(")")
            sentence = "" + sentence + ")"
            letter = ""
        }
        if (letter == "0101010") {
            basic.showString("*")
            sentence = "" + sentence + "*"
            letter = ""
        }
        if (letter == "0101011") {
            basic.showString("+")
            sentence = "" + sentence + "+"
            letter = ""
        }
        if (letter == "0101100") {
            basic.showString(",")
            sentence = "" + sentence + ","
            letter = ""
        }
        if (letter == "0101101") {
            basic.showString("-")
            sentence = "" + sentence + "-"
            letter = ""
        }
        if (letter == "0101110") {
            basic.showString(".")
            sentence = "" + sentence + "."
            letter = ""
        }
        if (letter == "0101111") {
            basic.showString("/")
            sentence = "" + sentence + "/"
            letter = ""
        }
        if (letter == "0110000") {
            basic.showString("0")
            sentence = "" + sentence + "0"
            letter = ""
        }
        if (letter == "0110001") {
            basic.showString("1")
            sentence = "" + sentence + "1"
            letter = ""
        }
        if (letter == "0110010") {
            basic.showString("2")
            sentence = "" + sentence + "2"
            letter = ""
        }
        if (letter == "0110011") {
            basic.showString("3")
            sentence = "" + sentence + "3"
            letter = ""
        }
        if (letter == "0110100") {
            basic.showString("4")
            sentence = "" + sentence + "4"
            letter = ""
        }
        if (letter == "0110101") {
            basic.showString("5")
            sentence = "" + sentence + "5"
            letter = ""
        }
        if (letter == "0110110") {
            basic.showString("6")
            sentence = "" + sentence + "6"
            letter = ""
        }
        if (letter == "0110111") {
            basic.showString("7")
            sentence = "" + sentence + "7"
            letter = ""
        }
        if (letter == "0111000") {
            basic.showString("8")
            sentence = "" + sentence + "8"
            letter = ""
        }
        if (letter == "0111001") {
            basic.showString("9")
            sentence = "" + sentence + "9"
            letter = ""
        }
        if (letter == "0111010") {
            basic.showString(":")
            sentence = "" + sentence + ":"
            letter = ""
        }
        if (letter == "0111011") {
            basic.showString(";")
            sentence = "" + sentence + ";"
            letter = ""
        }
        if (letter == "0111100") {
            basic.showString("<")
            sentence = "" + sentence + "<"
            letter = ""
        }
        if (letter == "0111101") {
            basic.showString("=")
            sentence = "" + sentence + "="
            letter = ""
        }
        if (letter == "0111110") {
            basic.showString(">")
            sentence = "" + sentence + ">"
            letter = ""
        }
        if (letter == "0111111") {
            basic.showString("?")
            sentence = "" + sentence + "?"
            letter = ""
        }
        if (letter == "0100000") {
            basic.showString("@")
            sentence = "" + sentence + "@"
            letter = ""
        }
        if (letter == "1000001") {
            basic.showString("A")
            sentence = "" + sentence + "A"
            letter = ""
        }
        if (letter == "1000010") {
            basic.showString("B")
            sentence = "" + sentence + "B"
            letter = ""
        }
        if (letter == "1000011") {
            basic.showString("C")
            sentence = "" + sentence + "C"
            letter = ""
        }
        if (letter == "1000100") {
            basic.showString("D")
            sentence = "" + sentence + "D"
            letter = ""
        }
        if (letter == "1000101") {
            basic.showString("E")
            sentence = "" + sentence + "E"
            letter = ""
        }
        if (letter == "1000110") {
            basic.showString("F")
            sentence = "" + sentence + "F"
            letter = ""
        }
        if (letter == "1000111") {
            basic.showString("G")
            sentence = "" + sentence + "G"
            letter = ""
        }
        if (letter == "1001000") {
            basic.showString("H")
            sentence = "" + sentence + "H"
            letter = ""
        }
        if (letter == "1001001") {
            basic.showString("I")
            sentence = "" + sentence + "I"
            letter = ""
        }
        if (letter == "1001010") {
            basic.showString("J")
            sentence = "" + sentence + "J"
            letter = ""
        }
        if (letter == "1001011") {
            basic.showString("K")
            sentence = "" + sentence + "K"
            letter = ""
        }
        if (letter == "1001100") {
            basic.showString("L")
            sentence = "" + sentence + "L"
            letter = ""
        }
        if (letter == "1001101") {
            basic.showString("M")
            sentence = "" + sentence + "M"
            letter = ""
        }
        if (letter == "1001110") {
            basic.showString("N")
            sentence = "" + sentence + "N"
            letter = ""
        }
        if (letter == "1001111") {
            basic.showString("O")
            sentence = "" + sentence + "O"
            letter = ""
        }
        if (letter == "1010000") {
            basic.showString("P")
            sentence = "" + sentence + "P"
            letter = ""
        }
        if (letter == "1010001") {
            basic.showString("Q")
            sentence = "" + sentence + "Q"
            letter = ""
        }
        if (letter == "1010010") {
            basic.showString("R")
            sentence = "" + sentence + "R"
            letter = ""
        }
        if (letter == "1010011") {
            basic.showString("S")
            sentence = "" + sentence + "S"
            letter = ""
        }
        if (letter == "1010100") {
            basic.showString("T")
            sentence = "" + sentence + "T"
            letter = ""
        }
        if (letter == "1010101") {
            basic.showString("U")
            sentence = "" + sentence + "U"
            letter = ""
        }
        if (letter == "1010110") {
            basic.showString("V")
            sentence = "" + sentence + "V"
            letter = ""
        }
        if (letter == "1010111") {
            basic.showString("W")
            sentence = "" + sentence + "W"
            letter = ""
        }
        if (letter == "1011000") {
            basic.showString("X")
            sentence = "" + sentence + "X"
            letter = ""
        }
        if (letter == "1011001") {
            basic.showString("Y")
            sentence = "" + sentence + "Y"
            letter = ""
        }
        if (letter == "1011010") {
            basic.showString("Z")
            sentence = "" + sentence + "Z"
            letter = ""
        }
        if (letter == "1011011") {
            basic.showString("[")
            sentence = "" + sentence + "["
            letter = ""
        }
        if (letter == "1011100") {
            basic.showString("\\")
            sentence = "" + sentence + "\\"
            letter = ""
        }
        if (letter == "1011101") {
            basic.showString("]")
            sentence = "" + sentence + "]"
            letter = ""
        }
        if (letter == "1011110") {
            basic.showString("^")
            sentence = "" + sentence + "^"
            letter = ""
        }
        if (letter == "1011111") {
            basic.showString("_")
            sentence = "" + sentence + "_"
            letter = ""
        }
        if (letter == "1100000") {
            basic.showString("`")
            sentence = "" + sentence + "`"
            letter = ""
        }
        if (letter == "1100001") {
            basic.showString("a")
            sentence = "" + sentence + "a"
            letter = ""
        }
        if (letter == "1100010") {
            basic.showString("b")
            sentence = "" + sentence + "b"
            letter = ""
        }
        if (letter == "1100011") {
            basic.showString("c")
            sentence = "" + sentence + "c"
            letter = ""
        }
        if (letter == "1100100") {
            basic.showString("d")
            sentence = "" + sentence + "d"
            letter = ""
        }
        if (letter == "1100101") {
            basic.showString("e")
            sentence = "" + sentence + "e"
            letter = ""
        }
        if (letter == "1100110") {
            basic.showString("f")
            sentence = "" + sentence + "f"
            letter = ""
        }
        if (letter == "1100111") {
            basic.showString("g")
            sentence = "" + sentence + "g"
            letter = ""
        }
        if (letter == "1101000") {
            basic.showString("h")
            sentence = "" + sentence + "h"
            letter = ""
        }
        if (letter == "1101001") {
            basic.showString("i")
            sentence = "" + sentence + "i"
            letter = ""
        }
        if (letter == "1101010") {
            basic.showString("j")
            sentence = "" + sentence + "j"
            letter = ""
        }
        if (letter == "1101011") {
            basic.showString("k")
            sentence = "" + sentence + "k"
            letter = ""
        }
        if (letter == "1101100") {
            basic.showString("l")
            sentence = "" + sentence + "l"
            letter = ""
        }
        if (letter == "1101101") {
            basic.showString("m")
            sentence = "" + sentence + "m"
            letter = ""
        }
        if (letter == "1101110") {
            basic.showString("n")
            sentence = "" + sentence + "n"
            letter = ""
        }
        if (letter == "1101111") {
            basic.showString("o")
            sentence = "" + sentence + "o"
            letter = ""
        }
        if (letter == "1110000") {
            basic.showString("p")
            sentence = "" + sentence + "p"
            letter = ""
        }
        if (letter == "1110001") {
            basic.showString("q")
            sentence = "" + sentence + "q"
            letter = ""
        }
        if (letter == "1110010") {
            basic.showString("r")
            sentence = "" + sentence + "r"
            letter = ""
        }
        if (letter == "1110011") {
            basic.showString("s")
            sentence = "" + sentence + "s"
            letter = ""
        }
        if (letter == "1110100") {
            basic.showString("t")
            sentence = "" + sentence + "t"
            letter = ""
        }
        if (letter == "1110101") {
            basic.showString("u")
            sentence = "" + sentence + "u"
            letter = ""
        }
        if (letter == "1110110") {
            basic.showString("v")
            sentence = "" + sentence + "v"
            letter = ""
        }
        if (letter == "1110111") {
            basic.showString("w")
            sentence = "" + sentence + "w"
            letter = ""
        }
        if (letter == "1111000") {
            basic.showString("x")
            sentence = "" + sentence + "x"
            letter = ""
        }
        if (letter == "1111001") {
            basic.showString("y")
            sentence = "" + sentence + "y"
            letter = ""
        }
        if (letter == "1111010") {
            basic.showString("z")
            sentence = "" + sentence + "z"
            letter = ""
        }
        if (letter == "1111011") {
            basic.showString("{")
            sentence = "" + sentence + "}"
            letter = ""
        }
        if (letter == "11110100") {
            basic.showString("|")
            sentence = "" + sentence + "|"
            letter = ""
        }
        if (letter == "11110101") {
            basic.showString("}")
            sentence = "" + sentence + "}"
            letter = ""
        }
        if (letter == "11110110") {
            basic.showString("~")
            sentence = "" + sentence + "~"
            letter = ""
        }
    } else if (letter.length > 0) {
        basic.showNumber(letter.length)
    }
})
