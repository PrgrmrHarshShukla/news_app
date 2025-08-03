export default async function validator({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  // Mock relevance Logic
  const isTitleRelevant = isRelated(title);
  const isDescriptionRelevant = isRelated(description);

  if (!isTitleRelevant || !isDescriptionRelevant) {
    return {
      success: false,
      reason: 'Submission rejected due to lack of relevance.'
    }
  }

  // Mock GPT Rewrite Logic
  const improvedTitle = clean(title);
  const improvedDescription = clean(description);

  // Check for unsafe words
  if (
    containsUnsafeWords(improvedTitle) || 
    containsUnsafeWords(improvedDescription)
  ) {
    return {
      success: false,
      reason: 'Submission rejected due to inappropriate or sensitive content.'
    }
  }

  return {
    success: true,
    title: improvedTitle,
    description: improvedDescription,
  };
}


// Check for unsafe words
const containsUnsafeWords = (text: string) => {
  const blockedWords = [
    'kill', 
    'rape', 
    'terrorist', 
    'bomb', 
    'suicide', 
    'murder', 
    'porn', 
    'abuse'
  ];

  return blockedWords.some(word =>
    text.toLowerCase().includes(word.toLowerCase())
  );
}

// Mock GPT Rewrite Logic
const clean = (str: string) => {
  let s = str.trim();
  if (s.endsWith('.')) s = s.slice(0, -1);
  s = s.charAt(0).toUpperCase() + s.slice(1);
  return s;
};

// Mock relevance Logic
const isRelated = (str: string) => {
  return true;
};
