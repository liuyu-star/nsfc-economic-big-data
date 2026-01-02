export const memberData = [
  { 
    name: "Guodong Li", 
    link: "https://saasweb.hku.hk/people/gdli.php",
    patterns: ["Guodong Li", "Li, G.", "G. Li", "Li G.", "Li, G. D.", "G. D. Li"]
  },
  { 
    name: "Degui Li", 
    link: "https://fba.um.edu.mo/staff/degui-li/",
    patterns: ["Degui Li", "Li, D.", "D. Li", "Li D.", "Li, D. G.", "D. G. Li"]
  },
  { 
    name: "Zhonglei Wang", 
    link: "https://wise.xmu.edu.cn/people/faculty/0e/6f/c16743a164506/page.htm",
    patterns: ["Zhonglei Wang", "Wang, Z.", "Z. Wang", "Wang Z.", "Wang, Z. L.", "Z. L. Wang"]
  },
  { 
    name: "Weixuan Zhu", 
    link: "https://wise.xmu.edu.cn/people/faculty/23/5d/c16743a180370/page.htm",
    patterns: ["Weixuan Zhu", "Zhu, W.", "W. Zhu", "Zhu W."]
  },
  { 
    name: "Ye He", 
    link: "http://math.sicnu.edu.cn/",
    patterns: ["Ye He", "He, Y.", "Y. He", "He Y."]
  },
  { 
    name: "Yingcun Xia", 
    link: "https://www.stat.nus.edu.sg/people/faculty-members/xia-yingcun/",
    patterns: ["Yingcun Xia", "Xia, Y.", "Y. Xia", "Xia Y.", "Xia, Y. C.", "Y. C. Xia"]
  },
  { 
    name: "Chen Wang", 
    link: "https://saasweb.hku.hk/people/cw.php",
    patterns: ["Chen Wang", "Wang, C.", "C. Wang", "Wang C."]
  },
  { 
    name: "Xu Qin", 
    link: "https://www.math.uestc.edu.cn/",
    patterns: ["Xu Qin", "Qin, X.", "X. Qin", "Qin X."]
  }
];

export const getLinkedText = (text) => {
  if (!text) return text;
  
  // Create a placeholder map to avoid double matching
  // e.g. replacing "Wang, Z." shouldn't trigger replacement for "Wang, Z. L."
  // Strategy: Sort matches by length (longest first)
  
  let result = text;
  // We need to match exact authors from the list. 
  // Simple check: split by common delimiters and check each part?
  // Or just simple string replacement for known patterns?
  // String replacement is risky if we have "Wang, Z.Y." matching "Wang, Z."
  
  // Better approach for this task:
  // Iterate patterns, if found, replace with a temporary placeholder UUID, then at the end replace placeholders with Links.
  // Sort all patterns by length DESC so "Li, D. G." matches before "Li, D."
  
  const allPatterns = [];
  memberData.forEach(m => {
    m.patterns.forEach(p => {
      allPatterns.push({ pattern: p, link: m.link, name: m.name });
    });
  });
  
  // Sort by length desc
  allPatterns.sort((a, b) => b.pattern.length - a.pattern.length);
  
  // In React we want to return an array of strings and elements.
  // Instead of complex logic, let's try a regex approach.
  // Construct a regex like /(Li, D\. G\.|Li, D\.|...)/g
  
  // Escape regex chars
  const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  const patternString = allPatterns.map(p => escapeRegExp(p.pattern)).join('|');
  const regex = new RegExp(`(${patternString})`, 'g');
  
  const parts = text.split(regex);
  
  return parts.map((part, i) => {
    const match = allPatterns.find(p => p.pattern === part);
    if (match) {
      return (
        <a 
          key={i} 
          href={match.link} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--primary-color)' }}
        >
          {part}
        </a>
      );
    }
    return part;
  });
};
