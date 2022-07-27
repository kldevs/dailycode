// https://www.codewars.com/kata/597770e98b4b340e5b000071

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.match(/(?<=^\d+_)(.+)(?=\.\w+)/)[0];
    }
}
