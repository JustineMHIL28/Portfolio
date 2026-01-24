# 💬 TAWK.TO SETUP GUIDE - FREE REAL-TIME CHAT!

## ✨ Ano ang Tawk.to?

**FREE** live chat widget! Pwede kang mag-chat sa visitors ng website mo in REAL-TIME!

Features:
- ✅ FREE forever (walang bayad!)
- ✅ Real-time messaging
- ✅ Mobile app (iOS & Android)
- ✅ Email notifications
- ✅ Chat history
- ✅ Multiple agents
- ✅ File sharing
- ✅ Customizable widget

---

## 🚀 STEP-BY-STEP SETUP:

### STEP 1: Create Tawk.to Account

1. Go to: **https://www.tawk.to/**
2. Click "**Sign Up Free**"
3. Fill in details:
   - Email
   - Password
   - Name
4. Verify email

---

### STEP 2: Add Your Website

1. After login, click "**Add Property**"
2. Enter details:
   - **Property Name**: Justine Portfolio
   - **Website URL**: your-portfolio-url.com (or localhost for testing)
3. Click "**Add Property**"

---

### STEP 3: Get Your Widget Code

1. Dashboard → Click your property
2. Go to "**Administration**" → "**Chat Widget**"
3. Copy the **Property ID** and **Widget ID**
   
   Example widget code:
   ```html
   <script type="text/javascript">
   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
   (function(){
   var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
   s1.async=true;
   s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
   s1.charset='UTF-8';
   s1.setAttribute('crossorigin','*');
   s0.parentNode.insertBefore(s1,s0);
   })();
   </script>
   ```

---

### STEP 4: Update Your Code

Open `src/components/Navbar.tsx` and find this line (around line 35):

```typescript
script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
```

Replace with YOUR actual IDs:

```typescript
script.src = 'https://embed.tawk.to/67890abcdef/1hijklmno';
```

---

### STEP 5: Customize Widget (Optional)

1. Go to Tawk.to Dashboard
2. **Administration** → **Chat Widget**
3. Customize:
   - Widget Position (bottom right recommended)
   - Colors (use green to match portfolio!)
   - Bubble text
   - Pre-chat form
   - Offline message

**Recommended Settings:**
- **Bubble Color**: `#10B981` (green)
- **Position**: Bottom Right
- **Show on Mobile**: Yes
- **Start Hidden**: No

---

### STEP 6: Test It!

1. Run your portfolio:
   ```bash
   npm start
   ```

2. Open in browser
3. You should see Tawk.to widget (bottom right)
4. Click to test chat

---

### STEP 7: Monitor Chats

**Desktop:**
- Go to https://dashboard.tawk.to/
- Click "**Monitoring**"
- See visitors and chat with them!

**Mobile:**
- Download **Tawk.to app** (iOS/Android)
- Login
- Get notifications
- Reply to messages

---

## 🎨 CUSTOMIZATION TIPS:

### Match Portfolio Colors:
```
Primary Color: #10B981 (green)
Secondary Color: #000000 (black)
Text Color: #FFFFFF (white)
```

### Widget Text:
- **Online**: "Chat with me! I'm online 🟢"
- **Offline**: "Leave a message 📧"

### Pre-chat Form:
- Name
- Email
- Message

---

## 📱 MOBILE APP:

Download:
- **iOS**: App Store → "Tawk.to"
- **Android**: Google Play → "Tawk.to"

Benefits:
- Reply anywhere
- Push notifications
- Visitor info
- Chat history

---

## 🔔 EMAIL NOTIFICATIONS:

Setup:
1. Dashboard → **Administration** → **Notifications**
2. Enable:
   - New chat started
   - Missed chat
   - Offline message
3. Add email addresses

---

## 💡 PRO TIPS:

1. **Add Triggers**: Auto-messages after X seconds
2. **Knowledge Base**: Add FAQs
3. **Shortcuts**: Quick replies for common questions
4. **Chat Tags**: Organize conversations
5. **Chat Routing**: Assign to team members

---

## ❓ TROUBLESHOOTING:

**Widget not showing?**
- Check Property ID and Widget ID
- Clear browser cache
- Check browser console for errors

**Chat not working?**
- Verify Tawk.to account is active
- Check internet connection
- Try different browser

**Can't receive messages?**
- Check email settings
- Enable notifications
- Install mobile app

---

## 🆓 ALTERNATIVES (if you want):

1. **Tidio** - https://www.tidio.com/ (Free tier)
2. **Crisp** - https://crisp.chat/ (Free tier)
3. **LiveChat** - https://www.livechat.com/ (Paid, 14-day trial)

**Pero TAWK.TO is the BEST kasi:**
- 100% FREE
- Unlimited chats
- Unlimited agents
- No branding removal fee

---

## 🎯 FINAL CHECKLIST:

- [ ] Created Tawk.to account
- [ ] Added property
- [ ] Copied Property ID & Widget ID
- [ ] Updated Navbar.tsx with your IDs
- [ ] Tested widget in browser
- [ ] Downloaded mobile app
- [ ] Customized colors to match portfolio
- [ ] Set up email notifications

---

**TAPOS NA! REAL-TIME CHAT NA YAN! 💬🔥**

Test mo lang at pwede ka na mag-reply sa visitors!
