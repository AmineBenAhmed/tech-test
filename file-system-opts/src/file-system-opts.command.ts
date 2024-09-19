import { Command, CommandRunner } from 'nest-commander';
import * as fs from 'fs';
import * as path from 'path';

@Command({
  name: 'GenerateFile',
  description:
    'this command read a file from path in parameter and ganarate the according file in upper cases',
})
export class GenerateFile extends CommandRunner {
  private INPUT = 'input';
  private OUTPUT = 'output';
  constructor() {
    super();
  }

  async redWrtieFile(
    inputFilePath: string = './files/input.txt',
    outputFilePath: string = './files/output.txt',
  ): Promise<string> {
    if (!inputFilePath) {
      throw new Error('input file path is missiong');
    }

    const inputFilePathToArray = inputFilePath.split('/');
    const inputFileName = inputFilePathToArray[inputFilePathToArray.length - 1];
    if (inputFileName !== 'input.txt') {
      throw new Error(
        `input file name must be "input.txt" but got ${inputFileName}`,
      );
    }

    if (!outputFilePath) {
      throw new Error('output file path is missiong');
    }

    const outputFilePathToArray = outputFilePath.split('/');
    const outputFileName =
      outputFilePathToArray[outputFilePathToArray.length - 1];
    if (outputFileName !== 'output.txt') {
      throw new Error(
        `output file name must be "output.txt" but got ${outputFileName}`,
      );
    }

    return new Promise((resolve, reject) =>
      fs.readFile(
        path.resolve(__dirname, inputFilePath),
        'utf-8',
        (err, data) => {
          if (err) {
            console.log(err);
            reject(err);
          }

          if (!data) {
            throw new Error('The input file is empty!\n');
          }

          fs.writeFile(
            path.resolve(__dirname, outputFilePath),
            data.toUpperCase(),
            'utf8',
            (error) => {
              if (error) {
                console.log(
                  `error while writing the file ${outputFilePath}, error: ${err}\n`,
                );
                throw error;
              } else {
                console.log(`Successfully wrote data to ${outputFilePath}.\n`);
              }
              resolve('done');
            },
          );
        },
      ),
    );
  }

  async run(filePaths: string[]): Promise<void> {
    try {
      const inputPath = filePaths
        .find((path) => path.split(':')[0] === this.INPUT)
        ?.split(':')[1];
      const outputPath = filePaths
        .find((path) => path.split(':')[0] === this.OUTPUT)
        ?.split(':')[1];
      await this.redWrtieFile(inputPath, outputPath);
    } catch (err) {
      throw new Error(`somthing went wrong:\n ${err}\n`);
    }
  }
}
