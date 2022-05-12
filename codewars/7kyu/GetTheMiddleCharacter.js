// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s)
{
    return s.length % 2 === 1 ? s.charAt(s.length / 2) : s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2)
}