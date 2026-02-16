## 1) null এবং undefined এর মধ্যে পার্থক্য কী?

**null** মানে হলো কোনো ভ্যারিয়েবলের ভ্যালু ইচ্ছাকৃতভাবে খালি বা empty রাখা হয়েছে।  
আর **undefined** মানে হলো ভ্যারিয়েবল তৈরি করা হয়েছে কিন্তু এখনো কোনো ভ্যালু assign করা হয়নি।

---

## 2) JavaScript এ map() ফাংশনের ব্যবহার কী? এটি forEach() থেকে কীভাবে আলাদা?

**map()** ফাংশন ব্যবহার করা হয় একটি array এর প্রতিটি element পরিবর্তন বা modify করে নতুন একটি array তৈরি করার জন্য।  
এটি সবসময় একটি **new array return করে**।

অন্যদিকে, **forEach()** শুধু array এর প্রতিটি element এর উপর loop চালায়, কিন্তু এটি কোনো নতুন array return করে না।

---

## 3) == এবং === এর মধ্যে পার্থক্য কী?

**==** শুধু ভ্যালু compare করে, type check করে না।  
কিন্তু **===** ভ্যালুর পাশাপাশি type ও check করে।
 
---

## 4) API Data Fetch করার ক্ষেত্রে async/await এর গুরুত্ব কী?

API থেকে data আনার সময় এটি একটি asynchronous কাজ।  
**async/await** ব্যবহার করলে কোডটি সহজভাবে লেখা যায় এবং data fetch হওয়ার আগ পর্যন্ত program অপেক্ষা করে, ফলে code readable এবং manageable হয়।

---

## 5) JavaScript এ Scope কী? (Global, Function, Block)

Scope মানে হলো কোনো ভ্যারিয়েবল কোথায় access করা যাবে তার সীমা।

- **Global Scope**: যেসব ভ্যারিয়েবল function এর বাইরে declare করা হয়, সেগুলো সব জায়গা থেকে access করা যায়।  
- **Function Scope**: function এর ভিতরে declare করা ভ্যারিয়েবল শুধুমাত্র ওই function এর ভিতরে ব্যবহার করা যায়।  
- **Block Scope**: `{}` এর ভিতরে declare করা `let` এবং `const` ভ্যারিয়েবল শুধুমাত্র ওই block এর ভিতরেই কাজ করে।
