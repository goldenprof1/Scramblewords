<?php
// Function to scramble specified words in the content
function scrambleWords($content, $wordsToScramble, $replacement = '****') {
    $words = explode(' ', $content); // Split content into words
    $scrambledContent = '';

    foreach ($words as $word) {
        if (in_array(strtolower($word), $wordsToScramble)) {
            $scrambledContent .= $replacement . ' '; // Replace matched word with the specified replacement
        } else {
            $scrambledContent .= $word . ' '; // Keep the word as is
        }
    }

    return trim($scrambledContent); // Remove trailing whitespace
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $content = $_POST['content'];
    $wordsToScramble = explode(' ', $_POST['wordsToScramble']);
    $replacement = isset($_POST['replacement']) ? $_POST['replacement'] : '****';

    $startTime = microtime(true); // Start time

    $scrambledContent = scrambleWords($content, $wordsToScramble, $replacement);

    $endTime = microtime(true); // End time
    $executionTime = round($endTime - $startTime, 2); // Calculate execution time
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Content Redaction</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <h1>Content Redaction</h1>
  <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <label for="content">Content:</label><br>
    <textarea id="content" name="content" rows="4" cols="50"><?php echo isset($content) ? $content : ''; ?></textarea><br>
    
    <label for="wordsToScramble">Words to Scramble:</label><br>
    <input type="text" id="wordsToScramble" name="wordsToScramble" value="<?php echo isset($_POST['wordsToScramble']) ? $_POST['wordsToScramble'] : ''; ?>"><br>
    
    <label for="replacement">Replacement Characters:</label><br>
    <input type="text" id="replacement" name="replacement" value="<?php echo isset($_POST['replacement']) ? $_POST['replacement'] : ''; ?>"><br>
    
    <button type="submit" id="redact-btn">Redact Now</button>
  </form>

  <?php if (isset($scrambledContent)): ?>
    <div id="result">
      <p>Scrambled Content: <?php echo $scrambledContent; ?></p>
      <p>Number of Words Scanned: <?php echo count(explode(' ', $content)); ?></p>
      <p>Number of Matched Words: <?php echo count(array_intersect(explode(' ', $content), $wordsToScramble)); ?></p>
      <p>Total Characters Scrambled: <?php echo strlen(str_replace(' ', '', $scrambledContent)); ?></p>
      <p>Execution Time: <?php echo $executionTime; ?> seconds</p>
    </div>
  <?php endif; ?>

  <script src="script.js"></script>
</body>
</html>