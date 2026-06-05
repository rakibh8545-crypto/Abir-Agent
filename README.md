# 👾 AI Code Agent Pro

একটি শক্তিশালী AI-powered code editor যা Replit এর মতো কাজ করে।

## ✨ Features

- 🤖 **AI Code Assistant** - Claude AI দিয়ে code লিখুন, edit করুন, debug করুন
- 💻 **Live Code Editor** - JavaScript code real-time execute করুন
- 🔄 **Code Insertion** - AI থেকে সরাসরি code editor এ আনুন
- 📤 **Live Output** - Console output তাৎক্ষণিক দেখুন
- 🎨 **Modern UI** - Beautiful dark theme with purple accent
- 📱 **Responsive Design** - Desktop এবং mobile তে কাজ করে

## 🚀 Getting Started

### 1. Clone করুন
```bash
git clone https://github.com/rakibh8545-crypto/Abir-Agent.git
cd Abir-Agent
```

### 2. Open করুন Browser এ
```bash
# Option 1: সরাসরি file open করুন
open index.html

# Option 2: Live Server দিয়ে
npx live-server
```

### 3. API Key যোগ করুন
- প্রথমবার chat এ message পাঠালে API key prompt হবে
- [Anthropic](https://console.anthropic.com) থেকে API key পান
- Key paste করুন এবং OK দাবান

## 📖 কীভাবে ব্যবহার করবেন

### Chat Section
```
💬 "একটা fibonacci function লিখ"
💬 "এই code optimize করো"
💬 "এটা debug করতে পারবি?"
```

### Code Editor
1. Chat থেকে code পান
2. **INSERT** button দাবান
3. Code editor এ paste হবে
4. **RUN** button দাবান
5. Output তাৎক্ষণিক দেখুন

## 🎯 Use Cases

✅ Algorithm practice  
✅ Code debugging  
✅ Learning programming  
✅ Quick code execution  
✅ Code optimization  
✅ Feature implementation  

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **AI**: Claude Sonnet 4 (Anthropic)
- **Styling**: Custom CSS with animations
- **Code Highlighting**: Highlight.js

## 📋 System Requirements

- Modern browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- Anthropic API key

## 🔐 Privacy

- সব code locally execute হয়
- API key browser এর localStorage এ রাখা হয়
- কোনো data server এ save হয় না

## 📝 Example Commands

```javascript
// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));

// String reverse
const str = "Hello";
console.log(str.split('').reverse().join(''));

// Array operations
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(x => x * 2));
```

## 🚀 Deploy করুন

### Vercel
```bash
vercel
```

### Netlify
```bash
netlify deploy
```

### GitHub Pages
```bash
# Push করুন main branch এ
# Settings → Pages → Deploy from branch: main
```

## 📞 Support

- Issues report করুন GitHub এ
- Feature request জন্য Discussion খুলুন

## 📄 License

MIT License - আপনি স্বাধীন ব্যবহার করতে পারেন

---

**Made with ❤️ by Abir**  
GitHub: [@rakibh8545-crypto](https://github.com/rakibh8545-crypto)
