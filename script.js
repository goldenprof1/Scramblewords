// Function to scramble specified words in the content
function scrambleWords(content, wordsToScramble, replacement = '****') {
  const words = content.split(' ');
  const scrambledContent = words.map(word => {
    if (wordsToScramble.includes(word.toLowerCase())) {
      return replacement;
    } else {
      return word;
    }
  }).join(' ');

  return scrambledContent;
}

// Event listener for redact button click
document.getElementById('redact-btn').addEventListener('click', function() {
  const content = document.getElementById('content').value;
  const wordsToScramble = document.getElementById('wordsToScramble').value.split(' ');
  const replacement = document.getElementById('replacement').value || '****';

  const scrambledContent = scrambleWords(content, wordsToScramble, replacement);

  // Display the redacted content and statistics
  document.getElementById('result').innerHTML = `
    <p>Scrambled Content: ${scrambledContent}</p>
    <p>Number of Words Scanned: ${content.split(' ').length}</p>
    <p>Number of Matched Words: ${wordsToScramble.filter(word => content.toLowerCase().includes(word.toLowerCase())).length}</p>
    <p>Total Characters Scrambled: ${scrambledContent.replace(/\s/g, '').length}</p>
  `;
});