this is a small script in nestjs that allow to read a text file with extension ".txt" and convert all it's text content to uppcase in another file called output.txt;

## install dependencies
  - npm i 

## how does it work
  to run this script without creating a server the nest js command-line library was used which allow us to create command lines and run them 
  them command structure is like this:
      - npm run GenerateFile [options]
    GenerateFile: name of the command, 
    by default it reads a file "input.txt", from folder "./src/files/input.txt"
    and write the output to the file "./src/files/output.tx"

    [options] if you have different paths you can specify them, here an example

    npm run GenerateFile "input:./inout.txt" "output:./output.txt"

    file names maust be "input.txt" for the input and "output.txt" for the output file.

    - you can specify the only the output file here is an example:

            npm run GenerateFile "output:./filesFolder/output.txt"

    - you can also specify the only the input file here is an example:

            npm run GenerateFile "input:./filesFolder/input.txt"
